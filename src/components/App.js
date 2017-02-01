import React from 'react';
import PersonList from './PersonList';
import personService from '../services/person';
import AddPersonForm from './AddPersonForm';

class App extends React.Component {

  state = {
    persons: [],
  }

  /*
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
    }
  }
  */

  componentDidMount() {
    personService.all().then(persons => {
      this.setState({
        persons,
      });
    });
  }

  handleDelete = (id) => {
    this.setState(prevState => ({
        persons: prevState.persons.filter(p => p.id !== id)
      })
    );
  }

  handleAdd = (person) => {
    this.setState(prevState => ({
        persons: prevState.persons.concat([person])
      })
    );
  }

  render() {

    const { persons } = this.state;

    return (
      <div>

        <AddPersonForm onAdd={this.handleAdd} />


        <h2>Young ones</h2>

        <PersonList onDelete={this.handleDelete} persons={persons.filter(p => p.age < 30)} />

        <h2>Old ones</h2>

        <PersonList onDelete={this.handleDelete} persons={persons.filter(p => p.age >= 30)} />

        <AddPersonForm onAdd={this.handleAdd} />

      </div>
    );
  }
};

export default App;
