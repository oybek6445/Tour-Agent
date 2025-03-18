const Booking = require('../models/Booking');
const Tour = require('../models/Tour');

exports.createBooking = async (req, res) => {
    const booking = new Booking(req.body);
    try {
        const savedBooking = await booking.save();
        const tour = await Tour.findById(booking.tour_id);
        res.status(201).json({ ...savedBooking._doc, tour });
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.getBookingById = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id).populate('tour_id');
        res.status(200).json(booking);
    } catch (err) {
        res.status(404).json(err);
    }
};
