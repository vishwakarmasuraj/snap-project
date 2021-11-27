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
        body('workEmail').isEmail().notEmpty().custom(value => {
            return userModel.findOne({ workEmail: value }).then(user => {
                if (user) {
                    return Promise.reject({ message: 'Email is already exist' })
                }
            })
        }),
        check('password').notEmpty().isLength({ min: 8 })
            .withMessage("Please enter a password at least 8 character"),
        // .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i")
        body('role').notEmpty().isAlpha(),
        body('status').notEmpty().isAlpha()
    ]
}

module.exports = { userValidationRule }