const Tour = require('../model/tourModel');

const createTour = async (req, res) => {
    try {
        await Tour.create(req.body);
        res.status(201).json({
            status: 'success',
            message: 'Tour created'
        });
    } catch (error) {
        console.error('Error in creating tour:', error);
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error'
        });
    }
};

const getTours = async (req, res) => {
    try {
        const tours = await Tour.find();
        res.status(200).json({
            status: 'success',
            message: 'fetched all tours',
            tours
        });
    } catch (error) {
        console.error('Error in fetching tours:', error);
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error'
        });
    }
};

module.exports = {
    createTour,
    getTours
};
