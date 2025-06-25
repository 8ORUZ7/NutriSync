const express = require('express');
const { logMeditation, getMeditationLogs } = require('../controllers/meditationController');

const router = express.Router();

// Log meditation session
router.post('/log', logMeditation);

// Get meditation logs
router.get('/:userId', getMeditationLogs);

module.exports = router;
