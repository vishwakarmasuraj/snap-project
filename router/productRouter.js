const express = require('express')
const router = express.Router()

const productValidateRule = require('./../middleware/productValidationRule')
const productValid = require('./../middleware/valid')
const productAuth = require('./../middleware/auth')
const productController = require('./../controller/product')

router.post('/create-product', productValidateRule.productvalidRule(), productValid.validate, productAuth.verifyToken, productController.addProduct)
router.get('/get-product', productAuth.verifyToken, productController.getProduct)
router.delete('/truncate', productController.productTruncate)

module.exports = router