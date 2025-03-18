const mongoose = require('mongoose');

const tourGuideSchema = new mongoose.Schema({
    name: { type: String, required: true },
    experience: { type: Number, required: true },
    phone: { type: String, required: true },
    tours: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tour' }]
}, { timestamps: true });

module.exports = mongoose.model('TourGuide', tourGuideSchema);
