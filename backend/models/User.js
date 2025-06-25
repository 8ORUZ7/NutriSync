const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  preferences: {
    fastingSchedule: {
      type: String,
      default: '',
    },
    healthConditions: {
      type: [String],
      default: [],
    },
    timezone: {
      type: String,
      default: 'UTC',
    },
  },
  schedule: [
    {
      time: {
        type: String,
        required: true,
      },
      activity: {
        type: String,
        required: true,
      },
    },
  ],
  meditationLogs: [
    {
      date: {
        type: Date,
        default: Date.now,
      },
      breathsTaken: {
        type: Number,
        default: 0,
      },
    },
  ],
});

module.exports = mongoose.model('User', UserSchema);
