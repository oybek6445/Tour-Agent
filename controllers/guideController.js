const TourGuide = require('../models/TourGuide');

exports.createGuide = async (req, res) => {
    const guide = new TourGuide(req.body);
    try {
        const savedGuide = await guide.save();
        res.status(201).json(savedGuide);
    } catch (err) {
        res.status(400).json(err);
    }
};
