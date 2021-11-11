const express = require('express')
const router = express()

const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER_NAME,
        pass: process.env.PASSWORD
    }
})

router.post('/test-email', async (req, res) => {
    try {

        const options = {
            from: 'nowtest465@gmail.com',
            to: 'nowtest465@gmail.com',
            subject: 'test sending email',
            text: 'wow! This is simple'
        }
        await transporter.sendMail(options);

        res.status(200).json({ message: 'Check your email' })

    } catch (error) {
        console.log('error', error)
        res.status(500).json({ message: 'Something went wrong' })

    }
})
module.exports = router