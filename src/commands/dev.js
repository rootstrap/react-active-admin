
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('../../webpack.config')()
const {scaffold} = require('../scaffold')
const watch = require('node-watch')

const {Command, flags} = require('@oclif/command')

class DevCommand extends Command {
  async run() {
    const {flags} = this.parse(DevCommand)
    const port = flags.port || 8000

    this.log('Running dev server...')

    const options = {
      publicPath: config.output.publicPath,
      hot: true,
      inline: true,
      contentBase: 'www',
      stats: {colors: true},
      historyApiFallback: false,
    }

    scaffold(`${process.cwd()}/models`)

    watch(`${process.cwd()}/models`, {recursive: true}, async () => {
      await scaffold(`${process.cwd()}/models`)
    })

    const server = new WebpackDevServer(webpack(config), options)

    server.listen(port, 'localhost', err => {
      if (err) {
        this.log(err)
      }
      this.log(`WebpackDevServer listening at localhost:, ${port}`)
    })
  }
}

DevCommand.description = `Run the development server
...
Extra documentation goes here
`

DevCommand.flags = {
  port: flags.string({char: 'p', description: 'server port'}),
}

module.exports = DevCommand
