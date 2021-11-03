const { body, check } = require('express-validator')
const user = require('../models/user')

const userValidationRule = () => {
    return [
        body('name').notEmpty(),
        body('email').isEmail().notEmpty().custom(value => {
            return user.findOne({ email: value }).then(user => {
                if (user) {
                    return Promise.reject({ message: 'Email is already exist' })
                }
            })
        }),
        body('password').notEmpty()
    ]
}

module.exports = { userValidationRule }