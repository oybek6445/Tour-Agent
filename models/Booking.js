const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    user_name: { type: String, required: true },
    tour_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tour' },
    date: { type: Date, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
