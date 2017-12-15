import React from "react";
import styles from "./App.pcss";
import uuid from "uuid";

import PersonList from "./PersonList";

class App extends React.Component {
  componentDidMount() {
    const { getPersons } = this.props;
    getPersons();
  }

  render() {
    const { persons, deletePerson, addPerson } = this.props;

    return (
      <div className={styles.root}>
        <p>
          <button
            onClick={() => {
              addPerson({
                id: uuid(),
                firstName: "Gaylord",
                lastName: "Lohiposki",
                age: 60,
                gender: "m"
              });
            }}
          >
            Add person
          </button>
        </p>

        <PersonList persons={persons} onDelete={deletePerson} />
      </div>
    );
  }
}

export default App;
