const express = require('express')
const router = express.Router()
const userController = require('./users')

router.use('/users', userController)

module.exports = router