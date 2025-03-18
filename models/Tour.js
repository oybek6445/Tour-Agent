const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    guides: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TourGuide' }]
}, { timestamps: true });

module.exports = mongoose.model('Tour', tourSchema);
