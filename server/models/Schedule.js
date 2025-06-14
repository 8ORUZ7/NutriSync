const mongoose = require('mongoose');
const scheduleSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  eventType: String,
  time: Date,
  details: Object
});
const Schedule = mongoose.model('Schedule', scheduleSchema);
module.exports = Schedule;
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  chronicConditions: [String],
  preferences: Object
});
module.exports = mongoose.model('User', userSchema);
const activitySchema = new mongoose.Schema({
  id: String,
  name: String,
  type: String,
  time: Date,
  duration: Number,
  intensity: Number,
  plan: Object
});
module.exports = mongoose.model('Activity', activitySchema);
const mealSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  time: Date,
  type: String,
  foodItems: [String],
  notes: String
});
const Meal = mongoose.model('Meal', mealSchema); 
const Activity = mongoose.model('Activity', activitySchema);
const User = mongoose.model('User', userSchema);
const Medication = mongoose.model('Medication', medicationSchema);
const Sleep = mongoose.model('Sleep', sleepSchema);
const Health = mongoose.model('Health', healthSchema);
const Diet = mongoose.model('Diet', dietSchema);
const Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = {
  Schedule,
  User,
  Activity,
  Meal,
  userSchema,
  activitySchema,
  mealSchema,
  scheduleSchema
}; 

