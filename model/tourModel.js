const mongoose = require('mongoose');



const TourSchema = mongoose.Schema({
  TourId: {
    type: String
  },
  TourCost: {
    type: Number
  },
  TourDestination: {
    type: String
  },
  TourStartDate: {
    type: Date
  },
  TourEndDate: {
    type: Date
  },
  TourStartPlace: {
    type: String
  },
  TourFlights :{
    type: Array
  },
  TourSeatClass:{
    type: Array
  },
  TourSeats:{
    type: Array
  },
  TourReturnFlights: {
    type: Array
  },
  TourReturnSeatClass:{
    type: Array
  },
  TourReturnSeat: {
    type: Array
  },
  TourAccommodation: {
    type: Array
  },
  TourActivities:{
    type: Array
  },
  TourImage:{
    type: String
    
  }

});

const TourData = mongoose.model('ToursData', TourSchema);

module.exports = TourData;
