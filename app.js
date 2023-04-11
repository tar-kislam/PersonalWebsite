const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')
const fs = require('fs')
const app = express()
const port = 3000

app.set('view engine', 'handlebars')

app.engine('handlebars', handlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout : 'index',
    partialsDir: __dirname + '/views/partials'
    }));

app.use('/public',express.static('public'))

app.get('/', (req, res) => {
    res.render('./partials/main');
});

app.listen(port, () => console.log(`The server is running on ${port} !`))