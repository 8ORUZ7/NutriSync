const mongoose = require('mongoose');
const mealSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  time: Date,
  type: String,
  foodItems: [String],
  notes: String
});
module.exports = mongoose.model('Meal', mealSchema);
