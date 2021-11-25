const { body, check } = require('express-validator')
const { userModel } = require('../models')

const userValidationRule = () => {
    return [
        body('fullName').notEmpty().isAlpha().withMessage('fullname should be alphabetical')
            .custom(value => {
                return userModel.findOne({ fullName: value }).then(user => {
                    if (user) {
                        return Promise.reject({ message: 'Fullname is already exist' })
                    }
                })
            }),
        check('workEmail').isEmail().notEmpty().custom(value => {
            return userModel.findOne({ workEmail: value }).then(user => {
                if (user) {
                    return Promise.reject({ message: 'Email is already exist' })
                }
            })
        }).withMessage('Email should be type of email'),
        check('password').notEmpty().isLength({ min: 8 }),
        body('role').notEmpty().isAlpha(),
        body('status').notEmpty().isAlpha()
    ]
}

module.exports = { userValidationRule }