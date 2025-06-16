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

// Novita API Key check
const novitaApiKey = process.env.NOVITA_API_KEY;
if (!novitaApiKey) {
  console.warn("Warning: NOVITA_API_KEY is not set in environment variables.");
}