const express = require('express');
const router = express.Router();
const Meal = require('../models/Meal');

router.post('/', async (req, res) => {
  const meal = new Meal(req.body);
  await meal.save();
  res.status(201).send(meal);
});

router.get('/:userId', async (req, res) => {
  const meals = await Meal.find({ userId: req.params.userId });
  res.send(meals);
});

router.delete('/:id', async (req, res) => {
  await Meal.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

router.put('/:id', async (req, res) => {
  const meal = await Meal.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(meal);
});

router.post('/:id/activity', async (req, res) => {
  const meal = await Meal.findById(req.params.id);
  if (!meal) {
    return res.status(404).send('Meal not found');
  }
  meal.activities.push(req.body);
  await meal.save();
  res.send(meal);
});

router.get('/:id/activity', async (req, res) => {
  const meal = await Meal.findById(req.params.id);
  res.send(meal.activities);
});

router.delete('/:id/activity/:activityId', async (req, res) => {
  const meal = await Meal.findById(req.params.id);
  if (!meal) {
    return res.status(404).send('Meal not found');
  }
  meal.activities = meal.activities.filter((activity) => activity.id !== req.params.activityId);
  await meal.save();
  res.status(204).send();
});

router.get('/:id/activity/:activityId', async (req, res) => {
  const meal = await Meal.findById(req.params.id);
  const activity = meal.activities.find((activity) => activity.id === req.params.activityId);
  res.send(activity);
});

router.put('/:id/activity/:activityId', async (req, res) => {
  const meal = await Meal.findById(req.params.id);
  if (!meal) {
    return res.status(404).send('Meal not found');
  }
  const activity = meal.activities.find((activity) => activity.id === req.params.activityId);
  if (!activity) {
    return res.status(404).send('Activity not found');
  }
  activity.set(req.body);
  await meal.save();
  res.send(activity);
});

router.delete('/:id/activity/:activityId', async (req, res) => {
  const meal = await Meal.findById(req.params.id);
  if (!meal) {
    return res.status(404).send('Meal not found');
  }
  meal.activities = meal.activities.filter((activity) => activity.id !== req.params.activityId);
  await meal.save();
  res.status(204).send();
});


module.exports = router;

  
