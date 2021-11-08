const express = require('express')
const router = express.Router()

const creationProjectRule = require('../middleware/projectValidationRule')
const projectValid = require('../middleware/valid')

const projectController = require('../controller/projectCreation')

router.post('/project-create', creationProjectRule.CreateProjectValidationRule(), projectValid.validate, projectController.createProject)
router.get('/get-project', projectController.createProject)

module.exports = router