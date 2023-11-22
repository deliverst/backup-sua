const fs = require('fs')
const mail = require('nodemailer')
const sendMail = require("./mailing")
require('dotenv').config()

const [month, day, year] = new Date().toLocaleString().split(' ')[0].replace(",","").split("/")

console.log(process.env.OS)
if (process.env.OS === 'Windows_NT') {
    // windows
    var pathOriginal = `C:\\Cobranza\\SUA\\SUA.MDB`
    var pathDestination = `C:\\SW\\scripts\\backupSUA\\${year}_${month}_${day}.MDB`
    
} else {
    // macOS testing
    var pathOriginal = `./testing/from/SUA.MDB`
    var pathDestination = `./testing/to/${year}_${month}_${day}.MDB`
}

fs.copyFile(pathOriginal, pathDestination, async (e) => {
    if (e) {
        // await sendMail()
    } else {
        // await sendMail()
        console.log(`the file was copied in ${pathDestination}`)
    }
})

// command to add schedule task:
// schtasks /create /tn "backupSUA" /tr "\"C:\Program Files\nodejs\node.exe\"\"C:\SW\scripts\backupSUA\index.js\"" /sc daily /st 07:00:00