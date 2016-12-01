// @flow

import React from 'react';
import styles from './PersonList.pcss';
import Person from './Person';
import ImmutablePropTypes from 'react-immutable-proptypes';

const PersonList = props => {

  const { persons, title, ...rest } = props;

  if (persons.length === 0) {
    return false;
  }

  const averageAge = persons.reduce((r, p) => r + p.age, 0) / persons.count();
  return (
    <div className={styles.root}>

      <h2>{title}</h2>

      <p>
        Keski-ikä: {averageAge.toFixed(2)}
      </p>

      {persons.map(person => <Person key={person.id} person={person} {...rest} />)}
    </div>
  );
};

PersonList.propTypes = {
  persons: ImmutablePropTypes.list.isRequired,
  title: React.PropTypes.string.isRequired,
};


export default PersonList;
