
const {Command} = require('@oclif/command')
const {promises: fs} = require('fs')
const {spawn} = require('child_process')
const os = require('os')

const packageJson = require('../../package.json')

class InitCommand extends Command {
  async run() {
    fs.writeFile('package.json', JSON.stringify(packageJson, null, 2) + os.EOL)
    const install = spawn('npm', ['install'], {stdio: 'inherit'})

    install.on('close', code => {
      if (code !== 0) this.log(`child process exited with code ${code}`)
    })
  }
}

InitCommand.description = `Describe the command here
...
Extra documentation goes here
`
module.exports = InitCommand
