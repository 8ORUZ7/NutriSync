import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Backend URL
});

export const fetchSchedule = () => API.get('/schedule');
export const fetchMeditationTips = () => API.get('/meditation');
