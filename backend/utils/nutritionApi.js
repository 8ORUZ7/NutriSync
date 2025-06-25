const axios = require('axios');

// Edamam API Configuration
const EDAMAM_API_URL = 'https://api.edamam.com/api/nutrition-data';
const EDAMAM_APP_ID = process.env.EDAMAM_APP_ID;
const EDAMAM_APP_KEY = process.env.EDAMAM_APP_KEY;

// Fetch nutritional data for a given ingredient
exports.getNutritionalData = async (ingredient) => {
  try {
    const response = await axios.get(EDAMAM_API_URL, {
      params: {
        app_id: EDAMAM_APP_ID,
        app_key: EDAMAM_APP_KEY,
        ingr: ingredient,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching nutritional data:', error.message);
    throw new Error('Failed to fetch nutritional data.');
  }
};
