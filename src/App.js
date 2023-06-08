
import React, { useState } from 'react';
import Menu from './components/Menu';
import InsertData from './components/InsertData';
import ViewData from './components/ViewData';
import GetRank from './components/GetRank';
import UpdateScore from './components/UpdateScore';
import DeleteRecord from './components/DeleteRecord';

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const renderComponent = () => {
    switch (selectedOption) {
      case 'insert':
        return <InsertData />;
      case 'view':
        return <ViewData />;
      case 'rank':
        return <GetRank />;
      case 'update':
        return <UpdateScore />;
      case 'delete':
        return <DeleteRecord />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>SAT Results App</h1>
      <Menu setSelectedOption={setSelectedOption} />
      <hr />
      {renderComponent()}
    </div>
  );
};

export default App;
