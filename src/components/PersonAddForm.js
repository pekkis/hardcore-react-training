import React from 'react';
import Button from './Button';

class PersonAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      firstName: '',
      lastName: '',
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addPerson(this.state.firstName, this.state.lastName);
  }
  render() {
    const { firstName, lastName } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            value={firstName}
            onChange={e => this.setState({ firstName: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            value={lastName}
            onChange={e => this.setState({ lastName: e.target.value })}
          />
        </div>

        <Button type="submit">Add person</Button>
      </form>
    )
  }
}

PersonAddForm.propTypes = {
  addPerson: React.PropTypes.func.isRequired,
};

export default PersonAddForm;
