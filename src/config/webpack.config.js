require('core-js/stable')
require('@babel/plugin-transform-runtime')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')
const path = require('path')
const merge = require('webpack-merge')
const {appDir} = require('./paths')

const defaultConfig = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules',
        include: path.resolve(__dirname, '../../app'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/env', {useBuiltIns: 'usage', corejs: 3}],
              '@babel/react',
            ],
            plugins: [
              require.resolve('@babel/plugin-proposal-class-properties'),
            ],
          },
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  entry: path.resolve(__dirname, '../../app/index.js'),
  resolve: {
    modules: [path.resolve(__dirname, '../../node_modules'), `${appDir}/node_modules`],
    alias: {
      data: `${appDir}/dist/data.js`,
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, '../../app/index.html'),
    }),
    new WriteFilePlugin({
      test: /^(?!.*(hot)).*/,
    }),
  ],
  output: {
    publicPath: '/',
    filename: 'bundle.js',
  },
}

module.exports = () => {
  const config = require(`${appDir}/webpack.config`)

  return merge(config, defaultConfig)
}
