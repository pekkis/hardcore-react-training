import React from 'react';
import styles from './Person.pcss';
import cx from 'classnames';
import Button from './Button';
import Gravatar from 'react-gravatar';
import { Link, browserHistory } from 'react-router';
import { pure } from 'recompose';

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

        <Gravatar email={person.email} />

        First Name:
        <Link to={`/user/${person.id}`}>{person.firstName}</Link>
        <button onClick={e => browserHistory.push(`/user/${person.id}`)}>GO GO GO</button>

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

export default pure(Person);
