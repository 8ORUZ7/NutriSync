const mongoose = require('mongoose');
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