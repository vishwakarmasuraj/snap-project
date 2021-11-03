const User = require('../models/user')
const { successHandler, errorHandler } = require('../helper/responseHandler')
const constants = require('../constant/allConstants')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const config = process.env

const userSignup = async (req, res) => {
    try {
        console.log(req.body)
        req.body.password = await bcrypt.hash(req.body.password, constants.ROUND)
        const user = await new User(req.body)
        await user.save()
        successHandler(res, constants.SIGNUP_SUCCESS_MSG)
    } catch (error) {
        return errorHandler(res, error)
    }
}

module.exports = { userSignup }