import React from 'react';
import styles from './Person.pcss';
import cx from 'classnames';
import Button from './Button';

const Person = props => {

  const { person, deletePerson } = props;
  const classes = cx(
    styles.root,
    {
      [styles.male]: person.gender === 'm',
      [styles.female]: person.gender === 'f',
    }
  );

  return (
    <div className={classes}>
      <div>
        First Name: {person.firstName}
      </div>
      <div>
        Last Name: {person.lastName}
      </div>

      <div>
        <Button
          onClick={() => deletePerson(person.id)}
        >
          Youre fired
        </Button>
      </div>

    </div>
  );

};

export default Person;
