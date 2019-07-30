const {promises: fs} = require('fs')
const {appDir} = require('./config/paths')
const defaultModel = require('./model')

const getModels = async modelsPath => {
  try {
    const modelFiles = await fs.readdir(modelsPath)
    const models = await modelFiles.reduce(async (accumulatorP, file) => {
      const model = await fs.readFile(`${modelsPath}/${file}`)
      const [modelName] = file.split('.')
      const accumulator = await accumulatorP
      return {...accumulator, [modelName]: {...defaultModel, ...JSON.parse(model)}}
    }, Promise.resolve({}))
    return models
  } catch (error) {
    throw error
  }
}

const scaffold = async () => {
  var dist = `${appDir}/dist`

  try {
    fs.mkdir(dist)
  } catch (error) {
    throw error
  }

  try {
    const models = await getModels(`${appDir}/models`)
    return fs.writeFile(`${dist}/data.js`, `export default ${JSON.stringify(models)}`)
  } catch (error) {
    throw error
  }
}

module.exports = {scaffold, getModels}

