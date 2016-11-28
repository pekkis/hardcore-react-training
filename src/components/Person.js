import React from 'react';
import cx from 'classnames';
import styles from './Person.pcss';
import Avatar from './Avatar';
import Button from './Button';
import Icon from 'react-fa';
import { pure } from 'recompose';

const Person = props => {
  const { person, deletePerson } = props;

  const classes = cx(styles.root, {
    [styles.male]: person.gender === 'm',
    [styles.female]: person.gender === 'f',
  });

  return (
    <div className={classes}>
      <Avatar src={person.avatar} />
      {person.lastName}, {person.firstName}

      <Button onClick={e => deletePerson(person.id)}><Icon name="times" /> Delete</Button>
    </div>
  );
};

Person.propTypes = {
  deletePerson: React.PropTypes.func.isRequired,
};

Person.defaultProps = {
};

export default pure(Person);
