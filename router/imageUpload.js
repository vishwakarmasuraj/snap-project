const express = require('express')
const router = express.Router()
const helper = require("./../helper/fileUpload");

router.post('/test', helper.single("file"), function (req, res) {
    console.log("req.file.filename", req.file.filename);
    res.status(200).json({ message: 'Image uploaded' })
});

module.exports = router