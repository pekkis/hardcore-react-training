import React from 'react';
import PersonList from './PersonList';
import AddPersonForm from './AddPersonForm';
import { createPerson } from '../services/personService';

const HomePage = props => {
  const { persons, addPerson, deletePerson } = props;

  return (
    <div>
      <AddPersonForm
        onSubmit={values => {
          addPerson({
            ...createPerson(),
            ...values,
          });
        }}
      />

      <h2>Good Employees</h2>

      <PersonList
        persons={persons.filter(p => p.gender === 'm').filter(p => p.age < 30)}
        deletePerson={deletePerson}
      />

      <h2>Bad Employees</h2>

      <PersonList
        persons={persons.filter(p => p.age >= 30)}
        deletePerson={deletePerson}
      />
    </div>
  );
};

export default HomePage;
