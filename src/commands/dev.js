
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('../webpack.config.js')
const {scaffold} = require('../scaffold')

const {Command, flags} = require('@oclif/command')

class DevCommand extends Command {
  async run() {
    const {flags} = this.parse(DevCommand)
    const port = flags.port || 8000
    this.log('Running dev server')

    const options = {
      publicPath: config.output.publicPath,
      hot: true,
      inline: true,
      contentBase: 'www',
      stats: {colors: true},
    }

    await scaffold('./models')

    const server = new WebpackDevServer(webpack(config), options)

    server.listen(port, 'localhost', err => {
      if (err) {
        this.log(err)
      }
      this.log(`WebpackDevServer listening at localhost:, ${port}`)
    })
  }
}

DevCommand.description = `Describe the command here
...
Extra documentation goes here
`

DevCommand.flags = {
  port: flags.string({char: 'p', description: 'server port'}),
}

module.exports = DevCommand
