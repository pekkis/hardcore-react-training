import React from 'react';
import Person from './Person';

const PersonList = props => {
  const { persons } = props;
  return (
    <div>
      {persons.map(p => <Person key={p.id} person={p} />)}
    </div>
  );
};

export default PersonList;
