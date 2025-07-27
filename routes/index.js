const express = require('express')
const { urlRender } = require('../controllers/urlController')
const apiRoute = require('./api')
const authMiddleware = require('../middleware/authMiddleware')
const getDashboard = require('../controllers/dashController')
const { logoutUser } = require('../controllers/authController')
const { loginPage, registerPage, homePage, errorPage } = require('../controllers/sitesController')
const router = express.Router()


// api routes
router.use(process.env.BASE_API, apiRoute)

// main routes
router.get('/', authMiddleware, homePage)
router.get('/login', loginPage)
router.get('/register', registerPage)
router.get('/logout', logoutUser)

// dashboard routes
router.get('/dashboard', authMiddleware, getDashboard)


// short url 
router.get('/:shortUrl', urlRender);

// error page
router.use((req, res) => res.status(404).render('error-page', { message: 'Page not found!' }))


module.exports = router