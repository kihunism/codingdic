const express = require('express')
const router = express.Router()
const controllers = require('../controllers')


router.post('/login', controllers.login)
router.post('/signup', controllers.signup)
router.post('/emailcode', controllers.emailcode)
router.post('/checknick', controllers.checknick)
router.get('/mypage', controllers.mypage)
router.post('/pwchange', controllers.pwchange)
router.post('/pwfind', controllers.pwfind)

module.exports = router