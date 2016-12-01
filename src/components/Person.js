// @flow

import React from 'react';
import styles from './Person.pcss';
import cx from 'classnames';
import Button from './Button';
import { pure } from 'recompose';
import { Link } from 'react-router';

import type { PersonType } from '../../decls/environment';

type Props = {
  person: PersonType,
  deletePerson: Function,
};

const Person = (props: Props): React.Element<any> => {

  const { person, deletePerson } = props;

  const classes = cx(
    styles.root, {
      [styles.male]: person.gender === 'm',
      [styles.female]: person.gender === 'f',
    }
  );

  return (
    <div className={classes}>
      <Link to={`/person/${person.id}`}>{person.firstName} {person.lastName}</Link>

      <Button onClick={e => deletePerson(person)}>Delete</Button>

    </div>
  );
};

Person.propTypes = {
  person: React.PropTypes.object.isRequired,
  deletePerson: React.PropTypes.func.isRequired,
};

export default pure(Person);
