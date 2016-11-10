import React from 'react';
import PersonList from './PersonList';
import styles from './App.pcss';
import personService from 'services/person';
import uuid from 'node-uuid';
import PersonAddForm from './PersonAddForm';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      persons: [],
    };

    this.deletePerson = this.deletePerson.bind(this);
    this.addPerson = this.addPerson.bind(this);
  }

  componentWillMount() {
    personService.getPersons().then(persons => {
      this.setState({
        persons,
      });
    });
  }

  addPerson(firstName, lastName) {

    const person = {
      ...personService.generatePerson(),
      firstName,
      lastName,
    };

    this.setState({
      persons: this.state.persons.concat([person])
    });
  }

  deletePerson(id) {
    this.setState({
      persons: this.state.persons
        .filter(p => p.id !== id),
    })
  }

  render() {
    const { persons } = this.state;

    return (
      <div>

        <h1>Mega App</h1>

        <PersonAddForm addPerson={this.addPerson} />

        {!!persons.length && <PersonList deletePerson={this.deletePerson} persons={persons.filter(person => person.gender === 'm')} title="Men" />}
        {!!persons.length && <PersonList deletePerson={this.deletePerson} persons={persons.filter(person => person.gender === 'f')} title="Women" />}
      </div>
    );
  }
};

export default App;
