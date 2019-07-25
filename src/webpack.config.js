const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')
require('@babel/polyfill')

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
      template: `${__dirname}/react-app/index.html`,
    }),
  ],
  entry: ['@babel/polyfill', `${__dirname}/react-app/index.js`],
  output: {
    path: `${process.cwd()}/dist/`,
    publicPath: 'http://localhost:8000',
    filename: 'bundle.js',
    globalObject: 'this',
  },
  devServer: {
    contentBase: './dist',
  },
  resolve: {
    alias: {
      data: path.resolve(process.cwd(), 'dist/data.js'),
    },
  },
}
