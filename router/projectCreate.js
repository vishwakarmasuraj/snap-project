const express = require('express')
const router = express.Router()

const createProjectValidRule = require('../middleware/projectCreateValidationRule')
const projectValid = require('../middleware/valid')
const projectController = require('../controller/projectCreation')

router.post('/create-project', createProjectValidRule.createProjectValidationRule(), projectValid.validate, projectController.projectCreate)

module.exports = router