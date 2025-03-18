const express = require('express');
const TourGuide = require('../models/TourGuide');
const { createGuide } = require('../controllers/guideController');

const router = express.Router();

// POST /guides
router.post('/', createGuide);


module.exports = router;
