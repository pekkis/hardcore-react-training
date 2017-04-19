import React from 'react';
import PropTypes from 'prop-types';
import Person from './Person';
import { pure } from 'recompose';
import ImmutablePropTypes from 'react-immutable-proptypes';

const PersonList = props => {
  const { persons, deletePerson } = props;

  const averageAge = persons.reduce((r, p) => r + p.age, 0) / persons.count();

  return (
    <div>

      <p>
        Average age: {averageAge.toFixed(1)}
      </p>

      {persons.map(p => <Person deletePerson={deletePerson} key={p.id} person={p} />)}
    </div>
  );
};

PersonList.propTypes = {
  persons: ImmutablePropTypes.list.isRequired,
  deletePerson: PropTypes.func.isRequired,
};

export default pure(PersonList);
