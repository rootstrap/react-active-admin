const { promises: fs } = require('fs')

const getModels = async modelsPath => {
  const modelFiles = await fs.readdir(modelsPath)
  const models = {}
  for (let file of modelFiles) {
    const model = await fs.readFile(`${modelsPath}/${file}`)
    const [modelName] = file.split('.')
    models[modelName] = JSON.parse(model)
  }
  return models
}

const scaffold = async () => {
  var dir = './dist'

  try {
    fs.mkdir(dir)
  } catch (error) {
    console.log(error)
  }

  const models = await getModels('./models')

  return fs.writeFile('./dist/data.js', `export default ${JSON.stringify(models)}`)
}

module.exports = { scaffold, getModels }

