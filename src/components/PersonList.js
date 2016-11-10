import React from 'react';
import Person from './Person';


const PersonList = props => {
  const { title, persons, ...rest } = props;

  const averageAge = persons.reduce((r, p) => r + p.age, 0) / persons.length;

  return (
    <div>
      <h2>{title}</h2>

      <p>
        {persons.length} persons, average age: {averageAge.toFixed(2)}
      </p>

      {persons.map(person => <Person {...rest} key={person.id} person={person} />)}
    </div>
  );
};

export default PersonList;
