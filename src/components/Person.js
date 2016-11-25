import React from 'react';
import styles from './Person.pcss';
import cx from 'classnames';

const Person = props => {
  const { person } = props;

  const classes = cx(styles.root, {

  });

  return (
    <div className={classes}>
      {person.lastName}, {person.firstName}
    </div>
  );
};

Person.propTypes = {
};

Person.defaultProps = {
};

export default Person;
