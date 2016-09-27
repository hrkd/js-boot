var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
  entry: './source/javascripts/main.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist/javascripts'),
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.js$/, loader: 'babel',
        query: {
          presets: ['es2015'],
        },
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/, loader: 'babel',
        query: {
          presets: ['es2015','react'],
        },
        exclude: /node_modules/
      },
      {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader') },
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
  ],
  resolve: {
    extensions: ['', '.css', '.js', '.jsx']
  },
  postcss: [
    require('autoprefixer-core'),
    require('postcss-color-rebeccapurple')
  ],
  watch: false,
  devtool: '#eval'
}
