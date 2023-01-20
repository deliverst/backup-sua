const nodemailer = require('nodemailer')
require('dotenv').config()

async function sendMail() {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAILGMAIL,
            pass: process.env.PASSGMAIL
        }
    })

    let mailOptions = {
        from: process.env.MAILGMAIL,
        to: process.env.MAILDESTINATION,
        subject: 'Notification SUA Backup',
        text: 'Something went wrong when trying to back up SUA database',
    }

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log(`send mail ${info.response}`)
        }
    })
}

module.exports = sendMail