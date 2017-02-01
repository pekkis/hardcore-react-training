import React from 'react';
import Person from './Person';
import styles from './PersonList.pcss';

const PersonList = props => {
  const { persons, onDelete } = props;
  const averageAge = persons.reduce((sum, p) => sum + p.age, 0) / persons.length;

  return (
    <div className={styles.root}>

      <p>
        Average age: {averageAge.toFixed(2)}
      </p>

      {persons.map(person => <Person key={person.id} person={person} onDelete={onDelete} />)}
    </div>
  );
};

export default PersonList;
