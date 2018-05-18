const path = require('path');
const webpack = require('webpack');

const DIST_DIR = path.join(__dirname, "dist");
const CLIENT_DIR = path.join(__dirname, "src");


module.exports = {
  mode: 'development',
  context: CLIENT_DIR,
  entry: './app',
  output: {
    path: DIST_DIR,
    filename: '[name].js',
  },
  watchOptions: { 
    poll: 500,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /(node_modules)/,
    }, {
      loaders: ['style-loader', 'css-loader'],
      test: /\.css$/,
      }, {
        test: /\.scss$/,
        use: [
          "style-loader", 
          "css-loader",
          "sass-loader" 
        ]
    }]
  },
  plugins: [
  ],
  devtool: 'cheap-module-eval-source-map',
};
