const express = require('express');
const router = express.Router();
const { Meal } = require('../models/Schedule');
const activityController = require('../controllers/activityController');

// CRUD for Meal
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

// Activities
router.post('/:id/activity', activityController.addActivity(Meal));
router.get('/:id/activity', activityController.getActivities(Meal));
router.delete('/:id/activity/:activityId', activityController.deleteActivity(Meal));
router.get('/:id/activity/:activityId', activityController.getActivity(Meal));
router.put('/:id/activity/:activityId', activityController.updateActivity(Meal));

// Plans (if used for meals)
router.get('/:id/activity/:activityId/plan', activityController.getPlans(Meal));
router.post('/:id/activity/:activityId/plan', activityController.addPlan(Meal));
router.put('/:id/activity/:activityId/plan', activityController.updatePlan(Meal));
router.delete('/:id/activity/:activityId/plan', activityController.deletePlan(Meal));

module.exports = router;