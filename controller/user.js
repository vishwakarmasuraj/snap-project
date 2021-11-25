const { userModel } = require('../models');
const { successHandler, errorHandler } = require('../helper/responseHandler');
const constants = require('../constant/allConstants');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = process.env

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const userSignup = async (req, res) => {
    try {
        req.body.password = await bcrypt.hashSync(req.body.password, constants.ROUND)
        const user = await new userModel(req.body)
        await user.save()
        successHandler(res, constants.SIGNUP_SUCCESS_MSG)
    } catch (error) {
        return errorHandler(res, error)
    }
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const getUser = async (req, res) => {
    try {
        const result = await userModel.find({}).select('-password')
        successHandler(res, constants.USER_LISTING_SUCCESS_MSG, result)
    } catch (error) {
        return errorHandler(res, error)
    }
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const getUserById = async (req, res) => {
    try {
        const id = req.params
        const result = await userModel.findOne({ _id: id }).select('-password')
        successHandler(res, constants.GET_MSG_BY_ID, result)
    } catch (error) {
        return errorHandler(res, constants.ERROR_MSG)
    }
}

/**
 * 
 */
generateToken = (user) => {
    return jwt.sign({ data: user }, config.SECRET_KEY, {
        expiresIn: '2h',
    })
}
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const userLogin = async (req, res) => {
    try {
        if (!req.body.workEmail || req.body.password == '') {
            res.status(400).json({ message: 'Valid email and password are required' })
        }
        let data = await userModel.findOne({ workEmail: req.body.workEmail });
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

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const truncate = async (req, res) => {
    try {
        await userModel.remove({})
        successHandler(res, constants.TRUNCATE_SUCCESS_MSG)
    } catch (error) {
        return errorHandler(res, constants.ERROR_MSG)
    }
}

module.exports = { userSignup, getUser, userLogin, getUserById, truncate }