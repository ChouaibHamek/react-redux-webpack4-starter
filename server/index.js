/* eslint-disable no-console */
const express = require('express')
const http = require('http')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const router = require('./router')
const mongoose = require('mongoose')

const app = express()

// DB setup
// after installing mongodb: mkdir -p /data/db , sudo chown -R $USER /data/db
// to run: mongod
// to stop: sudo service mongod stop
mongoose.connect('mongodb://localhost:27017/auth')

// App setup
app.use(morgan('combined'))
app.use(bodyParser.json({ type: '*/*' }))
router(app)

// Server setup
const port = process.env.PORT || 3090
const server = http.createServer(app)
server.listen(port)
console.log('Http server listening on:', port)
