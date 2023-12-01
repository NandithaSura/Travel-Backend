const Booking = require('../model/bookingModel');
const Tour = require('../model/tourModel')



const bookTour = async (req, res) => {
    try {

        const d = await Booking.create(req.body);
        const id = d.actualId;
        const TourSeats = d.TourSeats;
        const TourReturnSeat = d.TourReturnSeat;
        

        await patchSeats(id, TourSeats, TourReturnSeat);

        res.status(201).json({
            status: 'success',
            transactionId: d.transactionId,
            paymentDate: d.createdAt,
            message: 'booking successful'
        });
    } catch (error) {
        console.error('Error in booking tour:', error);
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error'
        });
    }
};


const patchSeats = async (actualId, TourSeats, TourReturnSeat) => {
    try {
        if (!actualId || !TourReturnSeat || !TourSeats) {
            throw new Error('Invalid request. Please provide actualId, TourReturnSeat, and TourSeats.');
        }

        const tour = await Tour.findOne({ _id: actualId });

        if (!tour) {
            throw new Error('Tour not found with the provided actualId.');
        }

        tour.TourSeats = tour.TourSeats.filter(seat => !TourSeats.includes(seat));
        tour.TourReturnSeat = tour.TourReturnSeat.filter(seat => !TourReturnSeat.includes(seat));

        await tour.save();
        
        console.log('Seats updated successfully');
    } catch (err) {
        console.error('Error in updating seats:', err.message);
        throw err; 
    }
};


const getMyTours = async (req, res) => {
    try {
        const userId = req.params.userId;
        const mybookings = await Booking.find({ userId });

        res.status(200).json({
            status: 'success',
            message: 'fetched bookings',
            mybookings
        });
    } catch (error) {
        console.error('Error in fetching user tours:', error);
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error'
        });
    }
};

module.exports = {
    bookTour,
    getMyTours
};
