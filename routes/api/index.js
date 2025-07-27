const express = require("express")
const authRoutes = require("./authRoutes")
const urlRoutes = require("./urlRoutes")
const apiRoute = express.Router()


//api routes
apiRoute.use('/auth', authRoutes)
apiRoute.use('/generate', urlRoutes)


module.exports = apiRoute