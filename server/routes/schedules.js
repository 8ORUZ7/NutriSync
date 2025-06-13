const express = require('express');
const router = express.Router();
const Schedule = require('../models/Schedule');

router.post('/', async (req, res) => {
  const schedule = new Schedule(req.body);
  await schedule.save();
  res.status(201).send(schedule);
});

router.get('/:userId', async (req, res) => {
  const schedules = await Schedule.find({ userId: req.params.userId });
  res.send(schedules);
});

module.exports = router;