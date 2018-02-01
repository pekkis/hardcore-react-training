import React from "react";
import personService from "../services/person";

class HireForm extends React.Component {
  state = {
    firstName: "Gaylord",
    lastName: "Lohiposki"
  };
  handleSubmit = e => {
    e.preventDefault();
    const { hirePerson } = this.props;

    const newPerson = {
      ...personService.createPerson(),
      ...this.state
    };

    hirePerson(newPerson);
  }

  render() {
    // const { firstName, lastName } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="text"
            value={this.state.firstName}
            onChange={e => {
              this.setState({
                firstName: e.target.value
              });
            }}
          />
        </div>
        <div>
          <input
            type="text"
            value={this.state.lastName}
            onChange={e => {
              this.setState({
                lastName: e.target.value
              });
            }}
          />
        </div>
        <button type="submit">Palkkaa!</button>
      </form>
    );
  }
};

export default HireForm;
