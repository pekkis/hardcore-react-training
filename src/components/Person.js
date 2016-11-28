import React from 'react';
import cx from 'classnames';
import styles from './Person.pcss';
import Avatar from './Avatar';

const Person = props => {
  const { person } = props;

  const classes = cx(styles.root, {
    [styles.male]: person.gender === 'm',
    [styles.female]: person.gender === 'f',
  });

  return (
    <div className={classes}>
      <Avatar src={person.avatar} />
      {person.lastName}, {person.firstName}
    </div>
  );
};

Person.propTypes = {
};

Person.defaultProps = {
};

export default Person;
