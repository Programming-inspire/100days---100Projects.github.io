const { response } = require('express');
const express = require('express')
const api = require('novelcovid');
const exhbs = require('express-handlebars')




const app = express()

app.set('view engine', 'hbs');

app.engine('hbs', exhbs({
    extname: 'hbs',
    defaultView: 'home',
    layoutsDir: __dirname + '/views/layouts'
}))

app.get('/', (req, res) => {
    api.countries()
    .then((response) => {
        res.render('home', {info:response})
    })
})

app.listen(4000,()=>{
    console.log("App is listening on Port 4000")
})