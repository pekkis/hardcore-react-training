import React from 'react';
import styles from './App.pcss';
import PersonList from './PersonList';
import { getPersons } from '../services/personService';
import AddPersonForm from './AddPersonForm';
import { List } from 'immutable';

class App extends React.PureComponent {

  state = {
    persons: List(),
  };

  componentWillMount() {
    getPersons().then(persons => {
      this.setState({
        persons: List(persons),
      });
    });
  }

  deletePerson = id => {
    this.setState({
      persons: this.state.persons.filter(p => p.id !== id),
    });
  }

  addPerson = person => {
    this.setState({
      persons: this.state.persons.push(person),
    });
  }

  render() {
    const { persons } = this.state;
    return (
      <div>

        <AddPersonForm addPerson={this.addPerson} />

        <h2>Good Employees</h2>

        <PersonList
          persons={persons.filter(p => p.gender === 'm').filter(p => p.age < 30)}
          deletePerson={this.deletePerson}
        />

        <h2>Bad Employees</h2>

        <PersonList
          persons={persons.filter(p => p.age >= 30)}
          deletePerson={this.deletePerson}
        />

      </div>
    );
  }
};

export default App;
