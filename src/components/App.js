import React from 'react';
import PersonList from './PersonList';

const App = props => {
  return (
    <div>

      <h2>Young ones</h2>

      <PersonList persons={persons.filter(p => p.age < 30)} />

      <h2>Old ones</h2>

      <PersonList persons={persons.filter(p => p.age >= 30)} />

    </div>
  );
};

export default App;
