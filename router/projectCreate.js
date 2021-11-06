const express = require('express')
const router = express.Router()

const userProjectValidateRule = require('../middleware/projectCreateValidationRule')
const userProjectValid = require('../middleware/valid')
const userProjectCreation = require('../controller/projectCreation')

router.post('/create-project', userProjectValidateRule.createProjectValidationRule(), userProjectValid.validate, userProjectCreation.projectCreate)


module.exports = router