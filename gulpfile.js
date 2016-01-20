var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');

// Static server
gulp.task('serve',['js'], function() {
  gulp.watch("js-source/**/*.js", ['js-watch']);
});

gulp.task('js-watch', ['js']);

gulp.task('js',function(){
  browserify({entries: ['./js-source/main.js']})
    .bundle()
    .pipe(source('all.js'))   // 出力ファイル名を指定
    .pipe(gulp.dest("./source/javascripts/"))   // 出力ディレクトリを指定
});
