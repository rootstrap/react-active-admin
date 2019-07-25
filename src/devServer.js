
import path from 'path';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack.config'
import scaffold from './scaffold';

const port = 8000;

export default async () => {
  const options = {
    publicPath: config.output.publicPath,
    hot: true,
    inline: true,
    contentBase: 'www',
    stats: { colors: true }
  };

  await scaffold('./models')

  const server = new WebpackDevServer(webpack(config), options);

  server.listen(port, 'localhost', function (err) {
    if (err) {
      console.log(err);
    }
    console.log('WebpackDevServer listening at localhost:', port);
  });

};