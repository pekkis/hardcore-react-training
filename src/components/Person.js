import React from 'react';
import styles from './Person.pcss';
import cx from 'classnames';
import { pure } from 'recompose';
import Button from './Button';

const Person = props => {
  const { person, onDelete } = props;

  const classes = cx(
    styles.root, {
      [styles.male]: person.gender === 'm',
      [styles.female]: person.gender === 'f',
    }
  );

  return (
    <div className={classes}>
      {person.lastName}, {person.firstName} ({person.age}) [{person.gender}]


      <Button
        type="button"
        onClick={e => onDelete(person.id)}
      >
        delete
      </Button>


    </div>
  );
};

export default pure(Person);
