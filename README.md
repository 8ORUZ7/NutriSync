# NutriSync: AI-Powered Wellness Scheduler

**Description**: NutriSync is a smart web/mobile app that helps users with chronic conditions (like ulcers or Crohn's disease), spiritual fasting (Ramadan), or health goals (like better cardiovascular performance or mindfulness) schedule and track their meals, breathing, and meditation based on circadian rhythm, medical timing, and AI-generated insights. 

## Features
- Smart Eating Scheduler
- Mindful Breath and Meditation
- Heart and Gut Health Insights
- Daily Sync Mode

## Tech Stack
- **Frontend**: React
- **Backend**: Node.js + Express
- **AI**: Novita AI / local LLM for meal plan & wellness suggestions
- **Database**: MongoDB (Mongoose)
- **APIs & Tools**:
  - Nutrition API (e.g., Edamam, Spoonacular)
  - Prayer/fasting time APIs (e.g., Aladhan API)
  - Breathing rate estimation from microphone (Web Audio API)
  - Cron-style scheduler for reminders

---

## Getting Started

### Prerequisites
- Node.js and npm
- MongoDB installed and running (or MongoDB Atlas)
- Novita AI API Key

### Clone the Repo
```bash
git clone https://github.com/8ORUZ7/NutriSync.git
cd NutriSync
```

### Install Backend Dependencies
```bash
cd server
npm install
```

### Create .env
```
MONGO_URI=your_mongodb_connection
NOVITA_API_KEY=
```

### Start Backend Server
```bash
npm run dev
```

### Install Frontend Dependencies
```bash
cd ../client
npm install
```

### Start React App
```bash
npm start
```
---

## API Endpoints

### Users
- `POST /api/users/register` → Register new user
- `GET /api/users/:id` → Get user info

### Meals
- `POST /api/meals` → Log a meal
- `GET /api/meals/:userId` → Get meals by user

### Schedules
- `POST /api/schedules` → Add schedule item
- `GET /api/schedules/:userId` → Get schedule by user

### AI
- `POST /api/ai/mealplan` → Generate AI-powered meal plan

