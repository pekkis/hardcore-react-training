import React from "react";
import personService from "../services/person";

class AddPersonForm extends React.PureComponent {
  state = {
    firstName: "Adam",
    lastName: "Adamsson"
  };

  handleSubmit = e => {
    e.preventDefault();
    const { hirePerson } = this.props;

    hirePerson({
      ...personService.createPerson(),
      ...this.state
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            placeholder="Etunimi"
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
            placeholder="Sukunimi"
            type="text"
            value={this.state.lastName}
            onChange={e => {
              this.setState({
                lastName: e.target.value
              });
            }}
          />
        </div>

        <div>
          <button type="submit">Palkkaa</button>
        </div>
      </form>
    );
  }
}

export default AddPersonForm;
