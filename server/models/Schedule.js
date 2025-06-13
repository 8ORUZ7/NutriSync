const mongoose = require('mongoose');
const scheduleSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  eventType: String,
  time: Date,
  details: Object
});
module.exports = mongoose.model('Schedule', scheduleSchema);