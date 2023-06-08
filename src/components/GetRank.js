

import React, { useState } from 'react';
import satResultsData from '../data';

const GetRank = () => {
  const [name, setName] = useState('');
  const [rank, setRank] = useState('');

  const handleGetRank = () => {
    const candidate = satResultsData.find((data) => data.name === name);

    if (candidate) {
      const candidateIndex = satResultsData.indexOf(candidate);
      setRank(candidateIndex + 1);
    } else {
      setRank('Not Found');
    }
  };

  return (
    <div>
      <h2>Get Rank</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <button onClick={handleGetRank}>Get Rank</button>
      <br />
      <p>Rank: {rank}</p>
    </div>
  );
};

export default GetRank;
