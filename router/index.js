const express = require('express')
const router = express.Router()

router.use('/user', require('./userRouter'))

router.use('/product', require('./productRouter'))

router.use('/upload', require('./imageUpload'))

module.exports = router