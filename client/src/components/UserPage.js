import React from 'react';
import needsPerson from './hoc/needsPerson';

const UserPage = props => {
  const { person } = props;

  return (
    <div>
      <h2>{person.lastName}, {person.firstName}</h2>
    </div>
  );

};

export default needsPerson(
  UserPage
);
