import React, { PureComponent } from "react";
import PersonList from "./PersonList";
import "./App.pcss";

class IndexPage extends PureComponent {
  isPersonBad = p => {
    /* define users age and filter everyone over 30 */
    return p.gender !== "f";
  };

  render() {
    const { persons, firePerson } = this.props;
    return (
      <div>
        <button>Fire</button>
        <h1>bad</h1>
        <PersonList
          persons={persons.filter(this.isPersonBad)}
          handleFirePerson={firePerson}
        />
        <h1>Good</h1>
        <PersonList
          persons={persons.filter(p => !this.isPersonBad(p))}
          handleFirePerson={firePerson}
        />
      </div>
    );
  }
}

export default IndexPage;
