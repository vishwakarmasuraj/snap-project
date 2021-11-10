const express = require('express')
const multer = require('multer')
const router = express.Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + 'JPEG')
    }
})

const upload = multer({ storage: storage }).single('file')

router.post('/', function (req, res) {

    upload(req, res, function (err) {
        if (err) {
            console.log(err)
        }
        res.status(200).json({ message: 'Image file uplaoded successfully' })
    })
})

module.exports = router