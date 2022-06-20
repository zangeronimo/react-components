const { DefinePlugin } = require("webpack");
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  output: {
    publicPath: 'https://react-components.tudolinux.com.br/',
  },
  mode: 'production',
  plugins: [
    new DefinePlugin({
      'process.env.REACT_APP_API': JSON.stringify('https://webeditor-api.tudolinux.com.br'),
    }),
  ],
})
