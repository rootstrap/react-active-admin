const HtmlWebPackPlugin = require('html-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')
const path = require('path')
require('@babel/plugin-transform-runtime')
require('@babel/plugin-proposal-class-properties')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules|commands/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react'],
            plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-proposal-class-properties'],
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
  mode: 'development',
  plugins: [
    new HtmlWebPackPlugin({
      template: `${__dirname}/app/index.html`,
    }),
    new WriteFilePlugin({
      test: /^(?!.*(hot)).*/,
    }),
  ],
  entry: `${__dirname}/app/index.js`,
  output: {
    path: `${process.cwd()}/dist`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    historyApiFallback: false,
  },
  resolve: {
    alias: {
      data: path.resolve(process.cwd(), 'dist/data.js'),
    },
  },
}
