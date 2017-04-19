import React from 'react';
import { createPerson } from '../services/personService';
import Button from './Button';

class AddPersonForm extends React.PureComponent {

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
  };

  render() {

    const { firstName, lastName } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>

        <div>
          <label>First name</label>
          <input
            type="text"
            value={firstName}
            onChange={e => this.setState({ firstName: e.target.value })}
          />
        </div>

        <div>
          <label>Last name</label>
          <input
            type="text"
            value={lastName}
            onChange={e => this.setState({ lastName: e.target.value })}
          />
        </div>

        <Button type="submit" plump>
          <span>lubs</span> HIRE!
        </Button>

      </form>
    );
  }

};

export default AddPersonForm;
