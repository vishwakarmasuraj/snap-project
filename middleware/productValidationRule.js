const { body } = require('express-validator')

const productvalidRule = () => {
    return [
        body('name').notEmpty(),
        body('description').notEmpty()
    ]
}

module.exports = { productvalidRule }