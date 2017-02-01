import React from 'react';
import styles from './Person.pcss';
import cx from 'classnames';

const Person = props => {
  const { person } = props;

  const classes = cx(
    styles.root, {
      [styles.male]: person.gender === 'm',
      [styles.female]: person.gender === 'f',
    }
  )

  return (
    <div className={classes}>
      {person.firstName}, {person.lastName} ({person.age}{person.gender})
    </div>
  )
}

export default Person;
