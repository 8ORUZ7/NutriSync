import React from 'react';
import { Bar } from 'react-chartjs-2';

const Dashboard = () => {
  const data = {
    labels: ['Meals', 'Meditation', 'Exercise'],
    datasets: [
      {
        label: 'Weekly Progress',
        data: [5, 3, 2],
        backgroundColor: ['#3f51b5', '#ff5722', '#4caf50'],
      },
    ],
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard</h1>
      <Bar data={data} />
    </div>
  );
};

export default Dashboard;
