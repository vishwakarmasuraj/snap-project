const { body } = require('express-validator')

const productValidRule = () => {
    return [
        // body('userIds').notEmpty(),
        body('name').notEmpty(),
        body('description').notEmpty()
    ]
}

module.exports = { productValidRule }