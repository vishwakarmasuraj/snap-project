const express = require('express'),
    router = express.Router();

router.use('/user', require('./userRouter'))

router.use('/product', require('./productRouter'));

router.use("/uploads", require("./imageUpload"))

router.use('/send', require('./sendMail.Router'))

router.use('/team', require('./addTeamRouter'))

module.exports = router