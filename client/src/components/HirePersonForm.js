import React from "react";
import personService from "../services/person";

class HirePersonForm extends React.PureComponent {
  state = {
    firstName: "",
    lastName: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const { hirePerson } = this.props;

    const hire = {
      ...personService.createPerson(),
      ...this.state
    };

    hirePerson(hire);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>First name</label>
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
          <label>Last name</label>
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

        <div>
          <button type="submit">palkkaa</button>
        </div>
      </form>
    );
  }
}

export default HirePersonForm;
