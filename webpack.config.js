const HtmlWebPackPlugin = require('html-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')
const merge = require('webpack-merge');
require('@babel/plugin-transform-runtime')
require('@babel/plugin-proposal-class-properties')

const config = require(`${process.cwd()}/webpack.config`)

const defaultConfig = {
  entry: `${__dirname}/app/index.js`,
  context: `${__dirname}`,
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
