const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
};

module.exports = {
  // Entry accepts a path or an object of entries.
  // We'll be using the latter form given it's
  // convenient with more complex configurations.
  entry: {
    src: PATHS.src,
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [{
      test: /\.(sass|scss)$/,
      loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      include: [PATHS.src],
    }, {
      test: /\.js$/,
      loaders: ['babel'],
      include: [PATHS.src],
    }, {
      test: /\.csv$/,
      loader: 'dsv-loader',
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hack Estimate',
      filename: 'index.html',
      template: path.join(PATHS.src, 'template.html'),
    }),
  ],
};
