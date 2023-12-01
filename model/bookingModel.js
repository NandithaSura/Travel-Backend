const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');


const BookedSchema = mongoose.Schema({
    userId:{
        type: String
    },
    actualId:{
      type: String
    },
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
  TourStartPlace: {
    type: String
  },
  // -------------------------------------------------
  TourFlights :{
    type: String
  },
  TourSeatClass:{
    type: String
  },
  TourSeats:{
    type: String
  },
  TourReturnFlights: {
    type: String
  },
  TourReturnSeatClass:{
    type: String
  },
  TourReturnSeat: {
    type: String
  },
  TourAccommodation: {
    type: String
  },
  // -----------------------------------------------------
  TourActivities:{
    type: Array
  },
  transactionId:{
    type: String
  },
  TourImage:{
    type: String
    
  },
  createdAt : String
});

BookedSchema.pre('save', function(){
    this.createdAt = Date.now()
    this.transactionId = uuidv4()
})

const BookedTour = mongoose.model('BookedTour', BookedSchema);



module.exports = BookedTour;
