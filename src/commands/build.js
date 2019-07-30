const webpack = require('webpack')
const config = require('../config/webpack.config')
const {scaffold} = require('../scaffold')
const {Command} = require('@oclif/command')

class DevCommand extends Command {
  pack() {
    webpack(config(),
      (err, stats) => {
        if (err) {
          this.log(err)
        } else {
          this.log('Stats', stats)
        }
      })
  }

  async run() {
    scaffold()
    this.pack()
  }
}

DevCommand.description = `Build the react app
...
Extra documentation goes here
`
module.exports = DevCommand
