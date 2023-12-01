const loginController = require('../controller/loginController')
const express = require('express')
const router = express.Router()

router.route('/signup').post(loginController.createUser)
router.route('/login').post(loginController.loginUser)

module.exports = router