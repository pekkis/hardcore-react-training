import React from "react";
import styles from "./App.pcss";
import IndexPage from "./IndexPage";
import PersonPage from "./PersonPage";
import { Switch, Route } from "react-router";

class App extends React.Component {

  render() {
    const { persons, hirePerson, firePerson } = this.props;
    return (
      <div>
        <h1>Fraktio Tussimestari ERP 3.0</h1>

        <Switch>
          <Route
            exact
            path="/"
            render={props => {
              return (
                <IndexPage
                  persons={persons}
                  hirePerson={hirePerson}
                  firePerson={firePerson}
                />
              );
            }}
          />

          <Route
            exact
            path="/person/:id"
            render={props => {
              const { id } = props.match.params;
              const person = persons.find(p => p.id === id);
              return (
                <PersonPage
                  person={person}
                />
              );
            }}
          />


        </Switch>


      </div>
    );
  }

  componentDidMount() {
    const { getPersons } = this.props;
    getPersons();
  }

}

export default App;
