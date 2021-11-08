const express = require('express')
const router = express.Router()

router.use('/user', require('./userRouter'))

router.use('/product', require('./productRouter'))

module.exports = router