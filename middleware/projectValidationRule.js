const { body } = require('express-validator')

const CreateProjectValidationRule = () => {
    return [
        body('projectName').notEmpty(),
        body('projectStart').notEmpty(),
        body('projectManager').notEmpty(),
        body('projectCost').notEmpty()
    ]
}

module.exports = { CreateProjectValidationRule }