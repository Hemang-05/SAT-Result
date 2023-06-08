
import React from 'react';
import satResultsData from '../data';

const ViewData = () => {
  return (
    <div>
      <h2>View All Data</h2>
      <pre>{JSON.stringify(satResultsData, null, 2)}</pre>
    </div>
  );
};

export default ViewData;
