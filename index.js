const express = require('express')
const app = express()
const { engine } = require('express-handlebars')

app.engine(
	'handlebars',
	engine({
		layoutsDir: __dirname + '/views',
		partialsDir: __dirname + '/views/componentes/',
	})
)

app.set('view engine', 'handlebars')

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'))

app.use('/public', express.static(__dirname + '/public'))

app.use('/img', express.static(__dirname + '/img'))

app.get('/',  (req, res) => {
	res.render('Inicio', {
		layout: 'Inicio',
		productos: ['banana', 'cebollas', 'lechuga', 'papas', 'pimenton', 'tomate'],
	})
})

app.listen(3000, () => {
	console.log('server running at http://localhost:3000')
})
