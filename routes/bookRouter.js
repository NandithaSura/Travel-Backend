const express = require('express')
const router = express.Router()
const bookingController = require('../controller/bookingController')




router.route('/booked').post( bookingController.bookTour)
router.route('/mybookings/:userId').get(bookingController.getMyTours)

module.exports = router