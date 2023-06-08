

import React, { useState } from 'react';
import satResultsData from '../data';

const DeleteRecord = () => {
  const [name, setName] = useState('');

  const handleDeleteRecord = () => {
    const candidate = satResultsData.find((data) => data.name === name);

    if (candidate) {
      const index = satResultsData.indexOf(candidate);
      satResultsData.splice(index, 1);
      console.log('Record deleted:', candidate);
    } else {
      console.log('Candidate not found');
    }

    setName('');
  };

  return (
    <div>
      <h2>Delete One Record</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <button onClick={handleDeleteRecord}>Delete</button>
    </div>
  );
};

export default DeleteRecord;
