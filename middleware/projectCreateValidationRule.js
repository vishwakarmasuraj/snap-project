const { body } = require('express-validator')
const createProjectValidationRule = () => {
    return [
        body('projectName').notEmpty(),
        body('projectStart').notEmpty(),
        body('projectManager').notEmpty(),
        body('projectCost').notEmpty()
    ]
}

module.exports = { createProjectValidationRule }