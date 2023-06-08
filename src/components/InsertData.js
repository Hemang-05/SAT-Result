

import React, { useState } from 'react';
import satResultsData from '../data';

const InsertData = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [pincode, setPincode] = useState('');
  const [score, setScore] = useState(0);

  const handleInsert = () => {
    const passed = score > 0.3 ? 'Pass' : 'Fail';

    const newData = {
      name,
      address,
      city,
      country,
      pincode,
      score,
      passed,
    };

    satResultsData.push(newData);

    // Clear the form fields
    setName('');
    setAddress('');
    setCity('');
    setCountry('');
    setPincode('');
    setScore(0);

    console.log('Data inserted:', newData);
  };

  return (
    <div>
      <h2>Insert Data</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Address:
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <br />
      <label>
        City:
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      </label>
      <br />
      <label>
        Country:
        <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
      </label>
      <br />
      <label>
        Pincode:
        <input type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} />
      </label>
      <br />
      <label>
        SAT Score:
        <input type="number" value={score} onChange={(e) => setScore(e.target.value)} />
      </label>
      <br />
      <button onClick={handleInsert}>Insert</button>
    </div>
  );
};

export default InsertData;
