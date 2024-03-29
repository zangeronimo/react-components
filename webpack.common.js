const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { ModuleFederationPlugin } = require("webpack").container
const deps = require('./package.json').dependencies

module.exports = {
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'main-bundle-[hash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'scss'],
    alias: {
      '@': path.join(__dirname, 'src')
    },
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      loader: 'ts-loader',
      exclude: [/node_modules/, /types/, /build/],
    }, {
      test: /\.scss$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
        },
        {
          loader: 'css-loader',
          options: {
            modules: true
          }
        },
        {
          loader: 'sass-loader'
        },
      ],
    }],
  },
  plugins: [
    new CleanWebpackPlugin({
      dangerouslyAllowCleanPatternsOutsideProject: true,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'main-bundle-[hash].css',
    }),
    new ModuleFederationPlugin({
      name: 'tudolinux_react',
      filename: 'remoteEntry.js',
      exposes: {
        './components/atoms/button': './src/components/atoms/button',

        './components/atoms/container': './src/components/atoms/container',

        './components/atoms/footer': './src/components/atoms/footer',

        './components/atoms/group': './src/components/atoms/group',

        './components/atoms/input': './src/components/atoms/input',

        './components/atoms/nav': './src/components/atoms/nav',

        './components/atoms/panel': './src/components/atoms/panel',

        './components/atoms/select': './src/components/atoms/select',
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
  ],
}
