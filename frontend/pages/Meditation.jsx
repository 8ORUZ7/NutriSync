import React, { useState } from 'react';

const Meditation = () => {
  const [breathCount, setBreathCount] = useState(0);

  const handleBreath = () => {
    setBreathCount(breathCount + 1);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Meditation Coach</h1>
      <p>Follow the guided breathing exercise below:</p>
      <button onClick={handleBreath}>Take a Breath</button>
      <p>You have taken {breathCount} breaths.</p>
    </div>
  );
};

export default Meditation;
