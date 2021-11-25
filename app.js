const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
require('dotenv').config()
const port = process.env.PORT
const routes = require('./router')

/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id User's unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */

mongoose.connect(process.env.DATABASE_CONNECTION).then(() => {
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use('/api', routes)
    app.use(passport.initialize());
    console.log('Successfully connected to Database')
    app.listen(port, () => console.log(`Server is listening at http://localhost:${ port }`))
}).catch((error) => {
    console.log(error)
});

