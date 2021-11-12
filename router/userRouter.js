const express = require('express'),
    router = express.Router(),
    { auth } = require('./../middleware'),
    { userValidateRule } = require('./../middleware'),
    { valid } = require('./../middleware'),
    { userController } = require('./../controller');

/**
 * 
 */
router.post('/user-signup', userValidateRule.userValidationRule(), valid.validate, userController.userSignup)
/**
 * 
 */
router.post('/user-login', userController.userLogin)
/**
 * 
 */
router.get('/get-user', auth.verifyToken, userController.getUser)
/**
 * 
 */
router.delete('/truncate', auth.verifyToken, userController.truncate)

module.exports = router