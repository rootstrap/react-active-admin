const {promises: fs} = require('fs')

const getModels = async modelsPath => {
  try {
    const modelFiles = await fs.readdir(modelsPath)
    const models = {}
    for (let file of modelFiles) {
      const model = await fs.readFile(`${modelsPath}/${file}`)
      const [modelName] = file.split('.')
      models[modelName] = JSON.parse(model)
    }
    return models
  } catch (error) {
    console.log(error)
  }
}

const scaffold = async () => {
  var dist = `${process.cwd()}/dist`

  try {
    fs.mkdir(dist)
  } catch (error) {
    console.log(error)
  }

  try {
    const models = await getModels(`${process.cwd()}/models`)
    return fs.writeFile(`${dist}/data.js`, `export default ${JSON.stringify(models)}`)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {scaffold, getModels}

