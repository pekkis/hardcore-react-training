import React from 'react';
import styles from './Person.pcss';

const Person = props => {
  const { person } = props;
  return (
    <div className={styles.root}>
      {person.lastName}, {person.firstName}
    </div>
  )
};

export default Person;
