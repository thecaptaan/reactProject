'use strict';
require('dotenv').config()
const hpp = require('hpp')
const cors = require('cors')
const helmet = require('helmet')
const express = require('express')
const bodyParser = require('body-parser')
const mongo = require('./src/utils/database/mongo')
const server = express()


server.use(cors())
server.use(helmet())
server.use(hpp())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

const routes = require('./src/routes')
server.use('/api/v1', routes)

server.listen(process.env.GET_PORT, () => {
    console.log(`Server is running on port ${process.env.GET_PORT}`)
})