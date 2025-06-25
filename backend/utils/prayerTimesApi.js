const axios = require('axios');

// Fetch prayer times for a given location
exports.getPrayerTimes = async (latitude, longitude) => {
  try {
    const response = await axios.get('https://api.aladhan.com/v1/timings', {
      params: {
        latitude,
        longitude,
        method: 2, // Calculation method (e.g., Muslim World League)
      },
    });

    return response.data.data.timings;
  } catch (error) {
    console.error('Error fetching prayer times:', error.message);
    throw new Error('Failed to fetch prayer times.');
  }
};
