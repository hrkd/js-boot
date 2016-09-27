var gulp         = require('gulp');
var webpack      = require('gulp-webpack');
var swig         = require('gulp-swig');
var sass         = require('gulp-sass');
var autoprefixer = require("gulp-autoprefixer");
var plumber      = require('gulp-plumber');
var prettify     = require('gulp-prettify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var data = require('gulp-data');
var json = require('./config/data.json');
var fs = require('node-fs-extra');
var browserSync = require('browser-sync').create();

gulp.task('swig',function(){
  gulp.src([
    './source/html/**/*.html',
    '!./source/html/**/_*.html'
  ])
  .pipe(swig({
    defaults: { cache: false },
    data: {
    }
  }))
  .pipe(gulp.dest('./.dist/'));
});

gulp.task('sass',function(){
  gulp.src([
    './source/sass/**/*.sass',
    '!./source/sass/**/_*.sass',
    './source/sass/**/*.scss',
    '!./source/sass/**/_*.scss'
  ])
  .pipe(plumber())
  .pipe(sass({outputStyle:'expanded'}))
  .pipe(autoprefixer())
  .pipe(gulp.dest('./.dist/stylesheets/'));
});

gulp.task('webpack', function(){
  webpack(require('./webpack.config.js'))
});


gulp.task('cpimg', function(){
  fs.copySync('./source/images/', './.dist/images/');
});

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
    port: 5100,
    server: ".dist",
    notify: false,
    files: ["./.dist/**/*.html","./.dist/**/*.js","./.dist/**/*.css"],
    ghostMode:false,
    open: false
  });
});

gulp.task('watch',function(){
  gulp.watch('./source/html/**/*.html', ['swig']);
  gulp.watch(['./source/sass/**/*.scss','./source/sass/**/*.sass'], ['sass']);
  gulp.watch(['./source/javascripts/**/*.js','./source/javascripts/**/*.jsx'], ['webpack']);
  gulp.watch(['./source/images/**/*.png','./source/images/**/*.jpg','./source/images/**/*.gif'], ['cpimg']);
});

gulp.task('default',['swig','sass','webpack','watch','browser-sync']);

