const express = require('express')
const router = express.Router()

const userValidationRules = require('../middleware/userValidationRule')
const userValid = require('../middleware/valid')
const userController = require('../controller/user')

router.get('/signup', userValidationRules.userValidationRule(), userValid.validate, userController.userSignup)



module.exports = router