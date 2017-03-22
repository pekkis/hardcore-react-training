import React from 'react';
import { createPerson } from '../services/personService';

class PersonAddForm extends React.PureComponent {

  state = {
    firstName: 'Gaylord',
    lastName: 'Lohiposki',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { addPerson } = this.props;

    addPerson({
      ...createPerson(),
      ...this.state,
    });
  }

  render() {
    const { firstName, lastName } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input value={firstName} onChange={e => { this.setState({ firstName: e.target.value })}} />
        </div>
        <div>
          <input value={lastName} onChange={e => { this.setState({ lastName: e.target.value })}}  />
        </div>
        <button type="submit">Add person</button>
      </form>
    );
  }
}

export default PersonAddForm;
