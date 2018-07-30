import React, { PureComponent } from "react";
import "./App.pcss";
import Spinner from "./Spinner";
import IndexPage from "./IndexPage";
import PersonPage from "./PersonPage";
import { Switch, Route } from "react-router";

class App extends PureComponent {
  componentDidMount() {
    const { getPersons } = this.props;
    getPersons();
  }

  render() {
    const { persons, firePerson, loading } = this.props;
    return (
      <div>
        {loading === 0 || <Spinner />}
        <h1>Fraktio ERP</h1>

        <Switch>
          <Route
            exact
            path="/"
            render={props => {
              return <IndexPage persons={persons} firePerson={firePerson} />;
            }}
          />

          <Route
            exact
            path="/person/:id"
            render={props => {
              const person = persons.find(p => p.id === props.match.params.id);
              return <PersonPage person={person} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
