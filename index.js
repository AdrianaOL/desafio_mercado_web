// Paso 1
const express = require('express')
const app = express()
const {engine} = require('express-handlebars')
app.listen(3000, () => {
  console.log('El servidor está inicializado en el puerto 3000')
})
app.engine(
  'handlebars',
  engine({
    layoutsDir: __dirname + '/views',
    partialsDir: __dirname + '/views/componentes/',
  })
)
app.set('view engine', 'handlebars')
// Paso 2
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'))

app.use('/img', express.static(__dirname + '/img'))
// Paso 3
app.get('/', function (req, res) {
  // Paso 5
  res.render('Inicio', {
    layout: 'Inicio',
    productos: [
      'banana',
      'cebollas',
      'lechuga',
      'papas',
      'pimenton',
      'tomate',
    ],
    
  })
})
