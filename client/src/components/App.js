import React from "react";
import "./App.pcss";
import Loading from "./Loading";
import IndexPage from "./IndexPage";
import PersonPage from "./PersonPage";
import { Switch, Route } from "react-router";

class App extends React.Component {
  componentDidMount() {
    const { getPersons } = this.props;
    getPersons();
  }

  render() {
    const { persons, firePerson, hirePerson, loading } = this.props;

    return (
      <div>
        {loading > 0 && <Loading />}

        <header>
          <h1>Fraktio ERP 6000</h1>
        </header>

        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <IndexPage
                  persons={persons}
                  firePerson={firePerson}
                  hirePerson={hirePerson}
                />
              );
            }}
          />
          <Route
            exact
            path="/person/:id"
            render={props => {
              const person = persons.get(props.match.params.id);
              return <PersonPage person={person} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
