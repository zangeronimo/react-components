const path = require("path");
const { DefinePlugin } = require("webpack");
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  output: {
    publicPath: 'http://localhost:3001/',
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 3001,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, './build'),
    },
    devMiddleware: {
      index: 'index.html',
      writeToDisk: true,
    },
  },
  plugins: [
    new DefinePlugin({
      'process.env.REACT_APP_API': JSON.stringify('http://localhost:4000/api'),
    }),
  ],
})
