const { body } = require('express-validator')

const productvalidRule = () => {
    return [
        // body('userIds').notEmpty(),
        body('name').notEmpty(),
        body('description').notEmpty()
    ]
}

module.exports = { productvalidRule }