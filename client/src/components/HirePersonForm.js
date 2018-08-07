import React from "react";
import personService from "../services/person";

class HirePersonForm extends React.Component {
  state = {
    firstName: "",
    lastName: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    const { hirePerson } = this.props;
    const newPerson = {
      ...personService.createPerson(),
      ...this.state,
      age: 18
    };
    hirePerson(newPerson);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>first name</label>
          <input
            value={this.state.firstName}
            onChange={e => {
              e.persist();

              this.setState(() => {
                return {
                  firstName: e.target.value
                };
              });
            }}
          />
        </div>

        <div>
          <label>last name</label>
          <input
            value={this.state.lastName}
            onChange={e => {
              this.setState({
                lastName: e.currentTarget.value
              });
            }}
          />
        </div>

        <div>
          <button type="submit">hire person</button>
        </div>
      </form>
    );
  }
}

export default HirePersonForm;
