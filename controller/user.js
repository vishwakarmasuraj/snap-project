const User = require('../models/user')
const { successHandler, errorHandler } = require('../helper/responseHandler')
const constants = require('../constant/allConstants')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const config = process.env

const userSignup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        req.body.password = await bcrypt.hash(req.body.password, constants.ROUND)
        const user = await new User(req.body)
        await user.save()
        successHandler(res, constants.SIGNUP_SUCCESS_MSG)
    } catch (error) {
        return errorHandler(res, error)
    }
}

const getUser = async (req, res) => {
    try {
        const result = await User.find({}).select('-password')
        successHandler(res, constants.USER_LISTING_SUCCESS_MSG, result)
    } catch (error) {
        return errorHandler(res, error)
    }
}

generateToken = (user) => {
    return jwt.sign({ data: user }, config.SECRET_KEY, {
        expiresIn: '2h',
    })
}

const userLogin = async (req, res) => {
    try {
        if (!req.body.email || req.body.password == '') {
            res.status(400).json({ message: 'Valid email and password are required' })
        }
        let data = await User.findOne({ email: req.body.email })
        if (!data) {
            return errorHandler(res, constants.EMAIL_LOGIN_ERR)
        } else {
            await bcrypt.compare(req.body.password, data.password, (error, match) => {
                if (error) {
                    return errorHandler(res, constants.ERROR_MSG, error)
                } else if (match) {
                    successHandler(res, constants.SUCCESS_LOGIN, {
                        token: generateToken(data),
                        data
                    })
                } else {
                    return errorHandler(res, constants.LOGIN_PASS_FAIL)
                }
            })
        }
    } catch (error) {
        errorHandler(res, error)
    }
}

const truncate = async (req, res) => {
    try {
        await User.remove({})
        successHandler(res, constants.TRUNCATE_SUCCESS_MSG)
    } catch (error) {
        return errorHandler(res, constants.ERROR_MSG)
    }
}

module.exports = { userSignup, getUser, userLogin, truncate }