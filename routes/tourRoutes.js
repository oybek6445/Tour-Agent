const express = require('express');
const Tour = require('../models/Tour');
const { createTour, getTourById } = require('../controllers/tourController');

const router = express.Router();

router.post('/', createTour);

router.get('/:id', getTourById);

module.exports = router;
