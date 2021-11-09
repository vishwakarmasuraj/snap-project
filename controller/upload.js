const express = require('express')
const router = express.Router()
const multer = require('multer')
const constants = require('../constant/allConstants')

const uploadingFile = (req, res) => {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            if (
                file.mimetype == 'JPG' ||
                file.mimetype == 'PNG' ||
                file.mimetype == 'PDF' ||
                file.mimetype == 'RAW' ||
                file.mimetype == 'INDD' ||
                file.mimetype == 'GIF' ||
                file.mimetype ||
                'PSD'
            ) {
                cb(null, true)
            } else {
                cb(null, false)
                return cb(new Error(constants.IMAGE_UPLOAD_ERR))
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
    res.status(200).json({ message: 'Image uploaded sucessfully' }, upload)
}

module.exports = { uploadingFile }