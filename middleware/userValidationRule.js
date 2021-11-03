const { body, check } = require('express-validator')

const userValidationRule = () => {
    return [
        body('name').notEmpty(),
        body('email').isEmail().notEmpty(),
        body('password').notEmpty()
    ]
}

module.exports = { userValidationRule }