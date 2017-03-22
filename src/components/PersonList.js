import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Person from './Person';

const PersonList = props => {
  const { persons, deletePerson } = props;

  const averageAge = persons.reduce((r, p) => r + p.age, 0) / persons.count();

  return (
    <div>
      <p>
        Average age: {averageAge.toFixed(2)}
      </p>
      {persons.map(person => <Person deletePerson={deletePerson} key={person.id} person={person} />)}
    </div>
  );
};

PersonList.propTypes = {
  persons: ImmutablePropTypes.list.isRequired,
  deletePerson: React.PropTypes.func.isRequired,
};

export default PersonList;
