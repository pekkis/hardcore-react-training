import React from 'react';
import PersonList from './PersonList';
import personService from '../services/person';

class App extends React.Component {
  state = {
    persons: [],
  }

  componentDidMount() {
    personService.all().then(persons => {
      this.setState({
        persons
      });
    });
  }

  render() {
    const { persons } = this.state;
    return (
      <div>
        <h2>Young ones</h2>
        <PersonList persons={persons.filter(p => p.age < 30)} />
        <h2>Old ones</h2>
        <PersonList persons={persons.filter(p => p.age >= 30)} />
      </div>
    );
  }
};

export default App;
