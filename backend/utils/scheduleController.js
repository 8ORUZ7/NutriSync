const User = require('../models/User');
const { generateWellnessSuggestions } = require('../ai/aiEngine');
const { getNutritionalData } = require('../utils/nutritionApi');
const { getPrayerTimes } = require('../utils/prayerTimesApi');

// Generate personalized schedule
exports.generateSchedule = async (req, res) => {
  const { userId, preferences, location } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Fetch prayer times
    const prayerTimes = await getPrayerTimes(location.latitude, location.longitude);

    // Generate AI-based wellness suggestions
    const aiSuggestions = await generateWellnessSuggestions(preferences);

    // Example logic for meal timings
    const schedule = [
      { time: prayerTimes.Fajr, activity: 'Suhoor: Dates and Water' },
      { time: '08:00 AM', activity: 'Breakfast: Oatmeal' },
      { time: '12:00 PM', activity: 'Lunch: Grilled Chicken' },
      { time: prayerTimes.Maghrib, activity: 'Iftar: Lentil Soup' },
    ];

    // Add AI suggestions to the schedule
    aiSuggestions.forEach((suggestion) => {
      schedule.push(suggestion);
    });

    // Save schedule to user
    user.schedule = schedule;
    await user.save();

    res.status(200).json({ success: true, schedule });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get nutritional data for a meal
exports.getMealNutrition = async (req, res) => {
  const { ingredient } = req.body;

  try {
    const nutritionData = await getNutritionalData(ingredient);
    res.status(200).json({ success: true, nutrition: nutritionData });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
