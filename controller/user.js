const User = require('../models/user')
const { successHandler, errorHandler } = require('../helper/responseHandler')
const constants = require('../constant/allConstants')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const config = process.env

const userSignup = async (req, res) => {
    try {
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
        const result = await User.find({})
        successHandler(res, constants.USER_LISTING_SUCCESS_MSG, result)
    } catch (error) {
        return errorHandler(res, error)
    }
}

generateToken = (user) => {
    return jwt.sign({ data: user }, process.env.SECRET_KEY, {
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
            return errorHandler(res, constants.EMAILLOGIN_ERR)
        } else {
            await bcrypt.compare(req.body.password, data.password, (error, match) => {
                if (error) {
                    return errorHandler(res, constants.ERROR_MSG, error)
                } else if (match) {
                    successHandler(res, constants.SUCCESSLOGIN, {
                        token: generateToken(data),
                        data,
                    })
                } else {
                    return errorHandler(res, constants.LOGINPASSFAIL)
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
        res.status(200).json({ message: 'Truncated' })
    } catch (error) {
        res.status(500).json({ message: 'something went wrong' })
    }
}

module.exports = { userSignup, getUser, userLogin, truncate }