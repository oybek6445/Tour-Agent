const Tour = require('../models/Tour');

exports.createTour = async (req, res) => {
    const tour = new Tour(req.body);
    try {
        const savedTour = await tour.save();
        res.status(201).json(savedTour);
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.getTourById = async (req, res) => {
    try {
        const tour = await Tour.findById(req.params.id).populate('guides');
        res.status(200).json(tour);
    } catch (err) {
        res.status(404).json(err);
    }
};
