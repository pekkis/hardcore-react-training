import React from 'react';
import styles from './Person.pcss';
import cx from 'classnames';
import Button from './Button';
import { pure } from 'recompose';

const Person = props => {
  const { person, deletePerson } = props;

  const classes = cx(
    styles.person,
    {
      [styles.male]: person.gender === 'm',
      [styles.female]: person.gender === 'f',
    },
  );

  return (
    <div className={classes}>

      <Button happy={person.gender === 'f'} onClick={e => deletePerson(person.id)}>
        Let go
      </Button>

      {person.lastName}, {person.firstName} ({person.age})
    </div>
  );
};

Person.propTypes = {
  person: React.PropTypes.object.isRequired,
  deletePerson: React.PropTypes.func.isRequired,
};

export default pure(Person);
