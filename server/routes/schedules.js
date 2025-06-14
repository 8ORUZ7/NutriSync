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

router.delete('/:id', async (req, res) => {
  await Schedule.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

router.put('/:id', async (req, res) => {
  const schedule = await Schedule.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(schedule);
});

router.get('/:id', async (req, res) => {
  const schedule = await Schedule.findById(req.params.id);
  res.send(schedule);
});

router.post('/:id/activity', async (req, res) => {
  const schedule = await Schedule.findById(req.params.id);
  if (!schedule) {
    return res.status(404).send('Schedule not found');
  }
  schedule.activities.push(req.body);
  await schedule.save();
  res.send(schedule);
});

router.get('/:id/activity', async (req, res) => {
  const schedule = await Schedule.findById(req.params.id);
  res.send(schedule.activities);
});

router.delete('/:id/activity/:activityId', async (req, res) => {
  const schedule = await Schedule.findById(req.params.id);
  if (!schedule) {
    return res.status(404).send('Schedule not found');
  }
  schedule.activities = schedule.activities.filter((activity) => activity.id !== req.params.activityId);
  await schedule.save();
  res.status(204).send();
});

router.put('/:id/activity/:activityId', async (req, res) => {
  const schedule = await Schedule.findById(req.params.id);
  if (!schedule) {
    return res.status(404).send('Schedule not found');
  }
  const activity = schedule.activities.find((activity) => activity.id === req.params.activityId);
  if (!activity) {
    return res.status(404).send('Activity not found');
  }
  activity.set(req.body);
  await schedule.save();
  res.send(activity);
});

router.get('/:id/activity/:activityId', async (req, res) => {
  const schedule = await Schedule.findById(req.params.id);
  if (!schedule) {
    return res.status(404).send('Schedule not found');
  }
  const activity = schedule.activities.find((activity) => activity.id === req.params.activityId);
  if (!activity) {
    return res.status(404).send('Activity not found');
  }
  res.send(activity);
});

router.delete('/:id/activity/:activityId', async (req, res) => {
  const schedule = await Schedule.findById(req.params.id);
  if (!schedule) {
    return res.status(404).send('Schedule not found');
  }
  schedule.activities = schedule.activities.filter((activity) => activity.id !== req.params.activityId);
  await schedule.save();
  res.status(204).send();
});

router.get('/:id/activity/:activityId/plan', async (req, res) => {
  const schedule = await Schedule.findById(req.params.id);
  if (!schedule) {
    return res.status(404).send('Schedule not found');
  }
  const activity = schedule.activities.find((activity) => activity.id === req.params.activityId);
  if (!activity) {
    return res.status(404).send('Activity not found');
  }
  res.send(activity.plan);
});

router.post('/:id/activity/:activityId/plan', async (req, res) => {
  const schedule = await Schedule.findById(req.params.id);
  if (!schedule) {
    return res.status(404).send('Schedule not found');
  }
  const activity = schedule.activities.find((activity) => activity.id === req.params.activityId);
  if (!activity) {
    return res.status(404).send('Activity not found');
  }
  activity.plan = req.body;
  await schedule.save();
  res.send(activity.plan);
});

router.put('/:id/activity/:activityId/plan', async (req, res) => {
  const schedule = await Schedule.findById(req.params.id);
  if (!schedule) {
    return res.status(404).send('Schedule not found');
  }
  const activity = schedule.activities.find((activity) => activity.id === req.params.activityId);
  if (!activity) {
    return res.status(404).send('Activity not found');
  }
  activity.plan.set(req.body);
  await schedule.save();
  res.send(activity.plan);
});

router.get('/:id/activity/:activityId/plan/:planId', async (req, res) => {
  const schedule = await Schedule.findById(req.params.id);
  if (!schedule) {
    return res.status(404).send('Schedule not found');
  }
  const activity = schedule.activities.find((activity) => activity.id === req.params.activityId);
  if (!activity) {
    return res.status(404).send('Activity not found');
  }
  const plan = activity.plan.find((plan) => plan.id === req.params.planId);
  if (!plan) {
    return res.status(404).send('Plan not found');
  }
  res.send(plan);
});

router.delete('/:id/activity/:activityId/plan/:planId', async (req, res) => {
  const schedule = await Schedule.findById(req.params.id);
  if (!schedule) {
    return res.status(404).send('Schedule not found');
  }
  const activity = schedule.activities.find((activity) => activity.id === req.params.activityId);
  if (!activity) {
    return res.status(404).send('Activity not found');
  }
  activity.plan = activity.plan.filter((plan) => plan.id !== req.params.planId);
  await schedule.save();
  res.status(204).send();
});

router.put('/:id/activity/:activityId/plan/:planId', async (req, res) => {
  const schedule = await Schedule.findById(req.params.id);
  if (!schedule) {
    return res.status(404).send('Schedule not found');
  }
  const activity = schedule.activities.find((activity) => activity.id === req.params.activityId);
  if (!activity) {
    return res.status(404).send('Activity not found');
  }
  const plan = activity.plan.find((plan) => plan.id === req.params.planId);
  if (!plan) {
    return res.status(404).send('Plan not found');
  }
  plan.set(req.body);
  await schedule.save();
  res.send(plan);
});

router.get('/:id/activity/:activityId/plan/:planId', async (req, res) => {
  const schedule = await Schedule.findById(req.params.id);
  if (!schedule) {
    return res.status(404).send('Schedule not found');
  }
  const activity = schedule.activities.find((activity) => activity.id === req.params.activityId);
  if (!activity) {
    return res.status(404).send('Activity not found');
  }
  const plan = activity.plan.find((plan) => plan.id === req.params.planId);
  if (!plan) {
    return res.status(404).send('Plan not found');
  }
  res.send(plan);
});

router.delete('/:id/activity/:activityId/plan/:planId', async (req, res) => {
  const schedule = await Schedule.findById(req.params.id);
  if (!schedule) {
    return res.status(404).send('Schedule not found');
  }
  const activity = schedule.activities.find((activity) => activity.id === req.params.activityId);
  if (!activity) {
    return res.status(404).send('Activity not found');
  }
  const plan = activity.plan.find((plan) => plan.id === req.params.planId);
  if (!plan) {
    return res.status(404).send('Plan not found');
  }
  activity.plan = activity.plan.filter((plan) => plan.id !== req.params.planId);
  await schedule.save();
  res.status(204).send();
}); 

router.get('/:id/activity/:activityId/plan/:planId/meal', async (req, res) => {
  const schedule = await Schedule.findById(req.params.id);
  if (!schedule) {
    return res.status(404).send('Schedule not found');
  }
  const activity = schedule.activities.find((activity) => activity.id === req.params.activityId);
  if (!activity) {
    return res.status(404).send('Activity not found');
  }
  const plan = activity.plan.find((plan) => plan.id === req.params.planId);
  if (!plan) {
    return res.status(404).send('Plan not found');
  }
  res.send(plan.meal);
}); 
module.exports = router;
