import React from 'react';
import styles from './Person.pcss';
import Link from 'redux-first-router-link';

const Person = props => {
  const { person } = props;
  return (
    <div className={styles.root}>
      <Link to={{ type: 'USER', payload: { id: person.id } }}>{person.lastName}, {person.firstName}</Link>
    </div>
  )
};

export default Person;
