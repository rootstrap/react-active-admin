import webpack from 'webpack';
import webpackConfig from './webpack.config'
import scaffold from './scaffold';
import { getModels } from './scaffold';

const pack = (models) => {
  console.log(webpackConfig)
  webpack(webpackConfig,
    (err, stats) => {
      console.log('Stats', stats)
    });
}

const defaultConfig = {
  modelsPath: './models'
}

export default (config = defaultConfig) => {
  const { modelsPath } = config;
  const models = getModels(modelsPath);
  scaffold(modelsPath);
  pack(models);
}