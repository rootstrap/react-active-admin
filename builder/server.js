const express = require('express')
const path = require('path')
const { getModels } = require('./connection');

const app = express()
const port = 8080;

// set the view engine to ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'));

// models page 
app.get('/', async (req, res) => {
  const models  = await getModels(`${process.cwd()}/models`);
  res.render('pages/models', {
      models,
  });
});

// new model page
app.get('/new', (req, res) => {
  res.render('pages/new')
})

app.listen(8080)
console.log(`Starting Reax Builder on the magic port ${port}`)
