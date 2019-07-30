const webpack = require('webpack')
const {Command, flags} = require('@oclif/command')

const config = require('../config/webpack.config')
const {scaffold} = require('../scaffold')

class BuildCommand extends Command {
  pack(logStats) {
    webpack(config(),
      (err, stats) => {
        if (err) this.log(err)
        else if (logStats) this.log('Stats', stats)
      })
  }

  async run() {
    const {flags} = this.parse(BuildCommand)
    const stats = flags.stats

    scaffold()
    this.pack(stats)
  }
}

BuildCommand.flags = {
  stats: flags.boolean({char: 's', description: 'log stats'}),
}

BuildCommand.description = `Build the react app
...
Extra documentation goes here
`
module.exports = BuildCommand
