const User = require('../models/User');
const nodeSchedule = require('node-schedule');
const axios = require('axios');

// Generate personalized schedule
exports.generateSchedule = async (req, res) => {
  const { userId, preferences } = req.body;

  try {
    const schedule = [];

    // Example logic for meal timings based on health conditions
    if (preferences.healthConditions.includes('ulcer')) {
      schedule.push({ time: '08:00 AM', activity: 'Breakfast: Oatmeal' });
      schedule.push({ time: '12:00 PM', activity: 'Lunch: Grilled Chicken' });
      schedule.push({ time: '06:00 PM', activity: 'Dinner: Steamed Vegetables' });
    }

    // Add fasting schedule (e.g., Ramadan)
    if (preferences.fastingSchedule === 'Ramadan') {
      schedule.push({ time: '04:30 AM', activity: 'Suhoor: Dates and Water' });
      schedule.push({ time: '07:30 PM', activity: 'Iftar: Lentil Soup' });
    }

    // Save schedule to user
    const user = await User.findById(userId);
    user.schedule = schedule;
    await user.save();

    res.status(200).json({ success: true, schedule });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Schedule meal reminders
exports.scheduleReminders = async (req, res) => {
  const { userId } = req.body;

  try {
    const user = await User.findById(userId);

    user.schedule.forEach((item) => {
      const [hour, minute] = item.time.split(':');
      nodeSchedule.scheduleJob(`${minute} ${hour} * * *`, () => {
        console.log(`Reminder: ${item.activity}`);
      });
    });

    res.status(200).json({ success: true, message: 'Reminders scheduled' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get user's schedule
exports.getUserSchedule = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.status(200).json({ success: true, schedule: user.schedule });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
