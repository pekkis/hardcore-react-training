// @flow

import React from 'react';
import Person from './Person';
import { pure } from 'recompose';
import { List } from 'immutable';

export type PersonType = {
  firstName: string,
  age: number,
}

type Props = {
  persons: List<PersonType>,
  deletePerson: Function,
};

const PersonList = (props: Props): React.Element<> => {
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

export default pure(PersonList);
