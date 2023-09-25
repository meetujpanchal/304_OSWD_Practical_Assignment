const express = require('express')
const mongoose = require('mongoose')
const app = express()
const multer = require('multer')
const fs = require('fs')
const path = require('path')

mongoose.connect('mongodb://0.0.0.0:27017/Q1DBex')
const db = mongoose.connection

db.on('open', ()=>{
    console.log('Connected!!')
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(express.static('views'))


var Storage = multer.diskStorage({
    destination: (req, file, callback) => {
        const destFolder = './uploads'
        //check if folder exist or not
        if (fs.existsSync(destFolder)) {
            callback(null, destFolder)
        } else {
            fs.mkdir(destFolder, (err) => {
                err ? console.error(err.stack) : callback(null, destFolder)
            })
        }
    },
    filename: (req, file, callback) => {
        callback(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})  

const acceptedTypes = ["image/jpeg", "image/jpg", "image/png", "image/svg", "image/gif"]

var upload = multer({
    storage: Storage, fileFilter: (req, file, callback) => {
        if (acceptedTypes.includes(file.mimetype)) {
            callback(null, true)
        } else {
            callback(null, false)
            return callback(`only ${acceptedTypes.toString(',')} format allowed`)
        }
    }
})

app.post('/upload_single', upload.single('userFile'), (req, res) => {
    return res.send('file is uploaded');
})

app.post('/upload_multiple', upload.array('userFiles', 4), (req, res) => {
    return res.send('files uploaded successfully.');
})
app.get('/file', (req, res) => {
    return res.sendFile(__dirname + '/views/upload.html');
})


const routers = require('./routes/Q1routes')
app.use('/data', routers)

app.listen(7000, ()=>{
    console.log('Listing on port 7000')
})