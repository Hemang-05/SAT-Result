

import React, { useState } from 'react';
import satResultsData from '../data';

const UpdateScore = () => {
  const [name, setName] = useState('');
  const [newScore, setNewScore] = useState('');

  const handleUpdateScore = () => {
    const candidate = satResultsData.find((data) => data.name === name);

    if (candidate) {
      candidate.score = newScore;
      candidate.passed = newScore > 30 ? 'Pass' : 'Fail';
      console.log('Score updated:', candidate);
    } else {
      console.log('Candidate not found');
    }

    setName('');
    setNewScore('');
  };

  return (
    <div>
      <h2>Update Score</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        New Score:
        <input type="number" value={newScore} onChange={(e) => setNewScore(e.target.value)} />
      </label>
      <br />
      <button onClick={handleUpdateScore}>Update Score</button>
    </div>
  );
};

export default UpdateScore;
