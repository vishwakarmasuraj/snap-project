const express = require('express')
const router = express.Router()

const tokenAuth = require('./../middleware/auth')
const userValidationRules = require('./../middleware/userValidationRule')
const userValid = require('./../middleware/valid')
const userController = require('./../controller/user')

router.post('/user-signup', userValidationRules.userValidationRule(), userValid.validate, userController.userSignup)
router.post('/user-login', userController.userLogin)
router.get('/get-user', tokenAuth.verifyToken, userController.getUser)
router.delete('/truncate', tokenAuth.verifyToken, userController.truncate)




module.exports = router