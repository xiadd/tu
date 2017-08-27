const express = require('express')
const request = require('request')
const multer = require('multer')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express()
const upload = multer()
const uploadUrl = 'https://sm.ms/api/upload'

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.post('/upload', upload.fields([{ name: 'outfile', maxCount: 1 }]), function (req, res) {
  request({
    method: 'POST',
    url: uploadUrl,
    headers: {
      'Content-Type': 'multipart/form-data',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.101 Safari/537.36'
    },
    formData: {
      smfile: {
        value: req.files.outfile[0].buffer,
        options: {
          filename: req.files.outfile[0].originalname,
          contentType: req.files.outfile[0].mimetype
        }
      }
    }
  }, function (err, response, body) {
    if (err) {
      res.json({
        code: 'failed',
        msg: err.message
      })
    }
    res.json(JSON.parse(body))
  })
  
})

app.use('/static', express.static(__dirname + '/public/static'))
app.use('*', express.static(__dirname + '/public'))

app.listen(3000, function () {
  console.log('upload server is running')
})