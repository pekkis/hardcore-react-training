import React from 'react';
import PersonList from '../components/PersonList';
import AddPersonForm from '../components/AddPersonForm';

const IndexPage = props => {

  const { persons, addPerson, deletePerson } = props;

  return (
    <div>
      <AddPersonForm onAdd={addPerson} />

      <h2>Young ones</h2>

      <PersonList onDelete={deletePerson} persons={persons.filter(p => p.age < 30)} />

      <h2>Old ones</h2>

      <PersonList onDelete={deletePerson} persons={persons.filter(p => p.age >= 30)} />

      <AddPersonForm onAdd={addPerson} />

    </div>
  );
};

export default IndexPage;
