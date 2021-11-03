const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
require('dotenv').config()
const port = process.env.PORT

const routes = require('./router')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(routes)
app.use(passport.initialize());

mongoose.connect(process.env.DATABASE_CONNECTION).then(() => {
    console.log('Successfully connected to Database')
})

mongoose.connection.on('error', (err) => {
    console.log('Error: Could not connect to Database.', err);
});

app.listen(port, () => console.log(`Server is listening at ${ port }`))
