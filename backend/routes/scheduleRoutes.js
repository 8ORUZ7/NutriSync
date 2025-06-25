const express = require('express');
const { generateSchedule, scheduleReminders, getUserSchedule } = require('../controllers/scheduleController');

const router = express.Router();

// Generate personalized schedule
router.post('/generate', generateSchedule);

// Schedule reminders
router.post('/reminders', scheduleReminders);

// Get user's schedule
router.get('/:userId', getUserSchedule);

module.exports = router;
