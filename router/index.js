const express = require('express')
const router = express.Router()

router.use('/user', require('./userRouter'))

router.use('/project', require('./projectCreate'))

module.exports = router