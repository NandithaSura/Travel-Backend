const tourController = require('../controller/tourController')
const express = require('express')
const router = express.Router()
const checkRole = require('../middleware/roleMiddleware')


router.route('/createTour').post( checkRole('admin'),tourController.createTour)

router.route('/alltours').get(tourController.getTours)


module.exports = router