const express = require('express')
const router = express.Router()

const uploadController = require('../controller/upload')

router.post('/profile', uploadController.uploadingFile)

module.exports = router