const express = require('express');
const { getHealthRecommendations } = require('../controllers/healthController');

const router = express.Router();

// Get health recommendations
router.post('/recommendations', getHealthRecommendations);

module.exports = router;
