const express = require('express');
const router = express.Router();
const axios = require('axios');

// Unified AI plan endpoint
const modelMap = {
  mealplan: 'novita-meal',
  wellness: 'novita-wellness',
  activity: 'novita-activity',
  exerciseplan: 'novita-exercise',
  sleepplan: 'novita-sleep',
  medicationplan: 'novita-medication',
  healthplan: 'novita-health'
};

router.post('/:planType', async (req, res) => {
  const { prompt } = req.body;
  const model = modelMap[req.params.planType];
  if (!model) return res.status(400).send('Invalid plan type');
  try {
    const response = await axios.post('https://api.novita.ai/v1/generate', {
      model,
      prompt,
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