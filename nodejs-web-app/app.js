#!/usr/bin/env node

const {
  createServer,
  IncomingMessage,
  ServerResponse,
} = require('unit-http')

require('http').ServerResponse = ServerResponse
require('http').IncomingMessage = IncomingMessage

const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello from NodeJS, app version 1.0!'))

createServer(app).listen()
