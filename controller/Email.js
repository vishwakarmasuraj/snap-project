const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport(transporter, {
    service: 'gmail',
    auth: {
        user: 'suraj.saviourinfotech@gmail.com',
        pass: 'dev@5151'
    }
})
const options = {
    from: 'suraj.saviourinfotech@gmail.com',
    to: 'suraj.saviourinfotech@gmail.com',
    subject: 'test sending email',
    text: 'wow! This is simple'
}

transporter.sendMail(options, (err, info) => {
    if (err) {
        console.log(err)
    }
    console.log('sent', info.response)
})


