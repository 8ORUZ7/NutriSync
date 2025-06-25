const axios = require('axios');

// Novita AI API Configuration
const NOVITA_API_URL = process.env.NOVITA_API_URL;
const NOVITA_API_KEY = process.env.NOVITA_API_KEY;

// Generate wellness suggestions using Novita AI
exports.generateWellnessSuggestions = async (userPreferences) => {
  try {
    const response = await axios.post(
      `${NOVITA_API_URL}/generate-suggestions`,
      {
        preferences: userPreferences,
      },
      {
        headers: {
          Authorization: `Bearer ${NOVITA_API_KEY}`,
        },
      }
    );

    return response.data.suggestions;
  } catch (error) {
    console.error('Error generating wellness suggestions:', error.message);
    throw new Error('Failed to generate wellness suggestions.');
  }
};
