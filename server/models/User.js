const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  chronicConditions: [String],
  preferences: Object
});
module.exports = mongoose.model('User', userSchema);