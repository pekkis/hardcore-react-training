import React from 'react';
import PersonList from '../components/PersonList.js';
import AddPersonForm from '../components/AddPersonForm';
import personService from '../services/person';

class IndexPage extends React.PureComponent {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    const { addPerson } = this.props;
    const newPerson = {
      ...personService.generatePerson(),
      firstName: data.firstName,
      lastName: data.lastName,
    };
    addPerson(newPerson);
  }

  render() {
    const { persons, addPerson, deletePerson } = this.props;

    return (
      <div>
        <PersonList deletePerson={deletePerson} title="Miehet" persons={persons.filter(p => p.gender === 'm')} />
        <PersonList deletePerson={deletePerson} title="Naiset" persons={persons.filter(p => p.gender === 'f')} />

        <AddPersonForm addPerson={addPerson} onSubmit={this.handleSubmit} />

      </div>
    );
  }

};

export default IndexPage;
