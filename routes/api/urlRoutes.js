const express = require('express')
const {urlGenerate} = require('../../controllers/urlController')
const authMiddleware = require('../../middleware/authMiddleware')
const urlRoutes = express.Router()


urlRoutes.post('/url', authMiddleware ,urlGenerate)


module.exports = urlRoutes