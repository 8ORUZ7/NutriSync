import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Dashboard from 'pages/Dashboard';
import Schedule from 'pages/Schedule';
import Meditation from 'pages/Meditation';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/meditation" element={<Meditation />} />
      </Routes>
    </Router>
  );
}

export default App;
