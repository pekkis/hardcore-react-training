import React from 'react';
import PersonList from './PersonList';
import PersonAddForm from './PersonAddForm';

class IndexPage extends React.Component {

  render() {
    const { persons, addPerson, deletePerson } = this.props;

    return (
      <div>

        <h2>Add a new person</h2>

        <PersonAddForm addPerson={addPerson} />

        <hr />

        <h2>Good Employees</h2>

        <PersonList
          deletePerson={deletePerson}
          persons={persons.filter(p => p.age <= 30)}
        />

        <h2>Bad Employees</h2>

        <PersonList
          deletePerson={deletePerson}
          persons={persons.filter(p => p.age > 30)}
        />

      </div>
    );
  }
}

export default IndexPage;
