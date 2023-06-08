

import React from 'react';

const Menu = ({ setSelectedOption }) => {
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        <li onClick={() => handleOptionSelect('insert')}>1. Insert data</li>
        <li onClick={() => handleOptionSelect('view')}>2. View all data</li>
        <li onClick={() => handleOptionSelect('rank')}>3. Get rank</li>
        <li onClick={() => handleOptionSelect('update')}>4. Update score</li>
        <li onClick={() => handleOptionSelect('delete')}>5. Delete one record</li>
      </ul>
    </div>
  );
};

export default Menu;
