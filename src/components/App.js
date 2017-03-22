import React from 'react';
import PersonList from './PersonList';
import PersonAddForm from './PersonAddForm';
import styles from './App.pcss';
import { getPersons } from '../services/personService';
import { List } from 'immutable';

class App extends React.Component {

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
    this.setState(currentState => {
      return {
        persons: currentState.persons.filter(p => p.id !== id),
      };
    });
  }

  addPerson = person => {
    this.setState(currentState => {
      return {
        persons: currentState.persons.push(person),
      };
    });
  }

  render() {

    const { persons } = this.state;

    if (persons.count() === 0) {
      return (<div>Laddare...</div>);
    }

    return (
      <div className={styles.root}>

        <h2>Add a new person</h2>

        <PersonAddForm addPerson={this.addPerson} />

        <hr />


        <h2>Good Employees</h2>

        <PersonList
          deletePerson={this.deletePerson}
          persons={persons.filter(p => p.age <= 30)}
        />

        <h2>Bad Employees</h2>

        <PersonList
          deletePerson={this.deletePerson}
          persons={persons.filter(p => p.age > 30)}
        />

      </div>
    );
  }
}

export default App;
