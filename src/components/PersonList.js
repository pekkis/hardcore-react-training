import React from 'react';
import Person from './Person';


const PersonList = props => {
  const { title, persons, ...rest } = props;

  const averageAge = persons.reduce((r, p) => r + p.age, 0) / persons.count();

  return (
    <div>
      <h2>{title}</h2>

      <p>
        {persons.count()} persons, average age: {averageAge.toFixed(2)}
      </p>

      {persons.map(person => <Person {...rest} key={person.id} person={person} />)}
    </div>
  );
};

export default PersonList;
