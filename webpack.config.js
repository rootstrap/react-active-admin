const HtmlWebPackPlugin = require('html-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')
const merge = require('webpack-merge');
const config = require(`${process.cwd()}/webpack.config`)
require('@babel/plugin-transform-runtime')
require('@babel/plugin-proposal-class-properties')

const defaultConfig = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules',
        include: `${__dirname}/app`,
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
  entry: `${__dirname}/app/index.js`,
  plugins: [
    new HtmlWebPackPlugin({
      template: `${__dirname}/app/index.html`,
    }),
    new WriteFilePlugin({
      test: /^(?!.*(hot)).*/,
    }),
  ],
}

module.exports = () => {
  return merge(config, defaultConfig);
}
