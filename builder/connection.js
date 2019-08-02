const {promises: fs} = require('fs')

const getModels = async modelsPath => {
  try {
    const modelFiles = await fs.readdir(modelsPath)
    const models = await modelFiles.reduce(async (accumulatorP, file) => {
      const model = await fs.readFile(`${modelsPath}/${file}`)
      const [modelName] = file.split('.')
      const accumulator = await accumulatorP
      return {...accumulator, [modelName]: {...JSON.parse(model)}}
    }, Promise.resolve({}))
    return Object.entries(models).map(model => ({name: model[0], ...model[1]}))
  } catch (error) {
    throw error
  }
}

module.exports = {getModels}