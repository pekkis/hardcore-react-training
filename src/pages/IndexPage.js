import React from 'react';
import PersonList from '../components/PersonList';
import PersonAddForm from '../components/PersonAddForm';

class IndexPage extends React.Component {

  render() {
    const { persons, deletePerson, addPerson } = this.props;
    console.log(persons, 'ppp');
    return (
      <div>
        <PersonAddForm addPerson={addPerson} />
        {persons.count() && <PersonList deletePerson={deletePerson} persons={persons.filter(person => person.gender === 'm')} title="Men" />}
        {persons.count() && <PersonList deletePerson={deletePerson} persons={persons.filter(person => person.gender === 'f')} title="Women" />}
      </div>
    );
  }
};

export default IndexPage;
