import React from "react";
import Loading from "./Loading";
import IndexPage from "./IndexPage";
import PersonPage from "./PersonPage";
import { Switch, Route } from "react-router";

import "./App.pcss";

class App extends React.PureComponent {
  componentDidMount() {
    this.props.getPersons();
  }

  render() {
    const { persons, hirePerson, firePerson, loading } = this.props;

    return (
      <div>
        <h1>Hello Broilerplate</h1>

        {loading > 0 && <Loading />}

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
