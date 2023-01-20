const fs = require('fs')
const mail = require('nodemailer')
const sendMail = require("./mailing")
require('dotenv').config()


const date = new Date().toLocaleString().split(' ')[0].replace(/\//g, '_').replace(',', '')

if (process.env.OS === 'Windows_NT') {
    // windows
    var pathOriginal = `/SUA.MDB`
    var pathDestination = `/backupFile_${date}.MDB`

} else {
    // macOS testing
    var pathOriginal = `/Users/deliverst/Desktop/SUA.MDB`
    var pathDestination = `/Users/deliverst/Desktop/backup/backupFile_${date}.MDB`
}


fs.copyFile(pathOriginal, pathDestination, async (e) => {
    if (e) {
        await sendMail()
    } else {
        console.log(`the file was copied in ${pathDestination}`)
    }
})