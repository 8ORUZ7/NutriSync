import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Schedule = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    // Fetch schedule from backend
    axios.get('/api/schedule')
      .then(response => setSchedule(response.data.schedule))
      .catch(error => console.error(error));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Daily Schedule</h1>
      <ul>
        {schedule.map((item, index) => (
          <li key={index}>
            {item.time} - {item.activity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;
