import React from 'react';
import personService from '../services/person';

class AddPersonForm extends React.PureComponent {

  state = {
    firstName: 'Uusi',
    lastName: 'Henkilö',
  };

  handleSubmit = e => {
    const { onAdd } = this.props;
    e.preventDefault();
    onAdd({
      ...personService.createPerson(),
      ...this.state,
    });
  };

  render() {
    const { firstName, lastName } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="text"
            value={firstName}
            onChange={e => {
              this.setState({
                firstName: e.target.value,
              })
            }}
          />
        </div>
        <div>
          <input
            type="text"
            value={lastName}
            onChange={e => {
              this.setState({
                lastName: e.target.value,
              })
            }}
          />
        </div>
        <button type="submit">add person</button>
      </form>
    );
  }
}

export default AddPersonForm;
