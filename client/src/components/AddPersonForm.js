import React from "react";
import personService from "../services/person";

class AddPersonForm extends React.Component {

  state = {
    firstName: "Adam",
    lastName: "Adamsson"
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
    const { firstName, lastName } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            placeholder="etunimi"
            value={firstName}
            onChange={e => {
              this.setState({
                firstName: e.target.value
              });
            }}
          />
        </div>

        <div>
          <input
            placeholder="sukunimi"
            value={lastName}
            onChange={e => {
              this.setState({
                lastName: e.target.value
              });
            }}
          />
        </div>

        <button type="submit">palkkaa</button>

      </form>
    );
  }


}

export default AddPersonForm;
