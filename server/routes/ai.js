const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/mealplan', async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await axios.post('https://api.novita.ai/v1/generate', {
      model: 'novita-health',
      prompt: prompt,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.NOVITA_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    res.send(response.data);
  } catch (err) {
    res.status(500).send({ error: 'AI generation failed', details: err.message });
  }
});

module.exports = router;
