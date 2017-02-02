import React from 'react';
import Person from './Person';
import styles from './PersonList.pcss';

const PersonList = props => {
  const { persons, onDelete } = props;
  const averageAge = persons.reduce((sum, p) => sum + p.age, 0) / persons.count();

  return (
    <div className={styles.root}>

      <p>
        Average age: {averageAge.toFixed(2)}
      </p>

      {persons
        .sortBy(p => p.firstName)
        .sortBy(p => p.lastName)
        .filterNot(p => p.lastName === 'Ondricka')
        .groupBy(p => p.lastName[0])
        .map((persons, letter) => (
          <div key={letter}>
            <h3>{letter}</h3>
            {persons.map(person => <Person key={person.id} person={person} onDelete={onDelete} />)}
          </div>
          )).toList()
      }

    </div>
  );
};

export default PersonList;
