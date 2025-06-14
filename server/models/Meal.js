const mongoose = require('mongoose');
const mealSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  time: Date,
  type: String,
  foodItems: [String],
  notes: String
});
module.exports = mongoose.model('Meal', mealSchema); 
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  chronicConditions: [String],
  preferences: Object
});
module.exports = mongoose.model('User', userSchema);
const scheduleSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  activities: [{
    id: String,
    name: String,
    type: String,
    time: Date,
    duration: Number,
    intensity: Number,
    plan: Object
  }],
  meals: [{
    id: String,
    time: Date,
    type: String,
    foodItems: [String],
    notes: String
  }],
  notes: String,
  preferences: Object,
  chronicConditions: [String],
  preferences: Object,
  medicationPlan: String,
  sleepPlan: String,
  healthPlan: String,
  dietPlan: String,
  exercisePlan: String,
});
module.exports = mongoose.model('Schedule', scheduleSchema);
