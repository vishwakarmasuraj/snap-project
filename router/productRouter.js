const express = require('express'),
    router = express.Router(),
    { productValidateRule } = require('./../middleware'),
    { valid } = require('./../middleware'),
    { auth } = require('./../middleware'),
    { productController } = require('./../controller');

/**
 * 
 */
router.post('/create-product', productValidateRule.productValidRule(), valid.validate, auth.verifyToken, productController.addProduct)
/**
 * 
 */
router.get('/get-product', auth.verifyToken, productController.getProduct)
/**
 * 
 */
router.delete('/truncate', auth.verifyToken, productController.productTruncate)

module.exports = router