const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Routes
const userRoutes = require('./routes/users');
const mealRoutes = require('./routes/meals');
const scheduleRoutes = require('./routes/schedules');
const aiRoutes = require('./routes/ai');

app.use('/api/users', userRoutes);
app.use('/api/meals', mealRoutes);
app.use('/api/schedules', scheduleRoutes);
app.use('/api/ai', aiRoutes);

app.get('/', (req, res) => {
  res.send('NutriSync API Running');
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
.catch((err) => console.error(err));

// Novita API Key
const novitaApiKey = process.env.NOVITA_API_KEY;
if (!novitaApiKey) {
  console.error('Novita API key not found. Please set the NOVITA_API_KEY environment variable.');
  process.exit(1);
}

// Novita API Client
const novitaApiClient = require('novita-api-client')({
  apiKey: novitaApiKey
});

// AI Routes
app.post('/api/ai/mealplan', async (req, res) => {
  const { userId, date, preferences } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send('User not found');
    }
    const response = await novitaApiClient.generateMealPlan({
      date,
      preferences: user.preferences,
      ...preferences
    });
    res.send(response);
  } catch (error) {
    console.error('Error generating meal plan:', error);
    res.status(500).send('Internal Server Error');
  }
});
  
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// AI Routes
app.post('/api/ai/wellness', async (req, res) => {
  const { userId, date, preferences } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send('User not found');
    }
    const response = await novitaApiClient.generateWellnessPlan({
      date,
      preferences: user.preferences,
      ...preferences,
      goals: user.goals
    });     
    res.send(response);
  } catch (error) {
    console.error('Error generating wellness plan:', error);
    res.status(500).send('Internal Server Error');
  }
});

// AI Routes
app.post('/api/ai/activity', async (req, res) => {
  const { userId, date, preferences } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send('User not found');
    }
    const response = await novitaApiClient.generateActivityPlan({
      date,
      preferences: user.preferences,
      ...preferences,
      goals: user.goals
    });     
    res.send(response);
  } catch (error) {
    console.error('Error generating activity plan:', error);
    res.status(500).send('Internal Server Error');
  }
});

