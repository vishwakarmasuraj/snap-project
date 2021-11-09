const express = require('express')
const router = express.Router()
const multer = require('multer')
const constants = require('./../constants/constant')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (
            file.mimetype == 'M4A' ||
            file.mimetype == 'FLAC' ||
            file.mimetype == 'MP3' ||
            file.mimetype == ' WAV' ||
            file.mimetype == 'MP4' ||
            file.mimetype == 'WMA' ||
            file.mimetype ||
            'AAC'
        ) {
            cb(null, true)
        } else {
            cb(null, false)
            return cb(new Error(constants.AUDIO_FORMAT_ERR))
        }
        cb(null, __dirname + './../uploads') //you tell where to upload the files,
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    },
})

const upload = multer({
    storage: storage,
    onFileUploadStart: function (file) {
        console.log(file.originalname + ' is starting ...')
    },
})

router.post('/profile', upload.single('file'), function (req, res, next) {
    console.log('code here....')
    console.log(req.file)
})

module.exports = router