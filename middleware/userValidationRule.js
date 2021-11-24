const { body, check } = require('express-validator')
const { userModel } = require('../models')

const userValidationRule = () => {
    return [
        body('fullName').notEmpty().isAlpha()
            .custom(value => {
                return userModel.findOne({ fullName: value }).then(user => {
                    if (user) {
                        return Promise.reject({ message: 'Fullname is already exist' })
                    }
                })
            }),
        body('workEmail').isEmail().notEmpty().custom(value => {
            return userModel.findOne({ workEmail: value }).then(user => {
                if (user) {
                    return Promise.reject({ message: 'Email is already exist' })
                }
            })
        }),
        body('password').notEmpty().isLength({ min: 8 }),
        body('role').notEmpty().isAlpha(),
        body('status').notEmpty().isAlpha()
    ]
}

module.exports = { userValidationRule }