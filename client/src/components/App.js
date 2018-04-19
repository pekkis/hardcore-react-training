import React from "react";
import "./App.pcss";
import Loading from "./Loading";
import IndexPage from "./IndexPage";
import PersonPage from "./PersonPage";
import { Switch, Route } from "react-router";

class App extends React.PureComponent {
  state = {
    error: undefined
  };

  componentDidMount() {
    const { getPersons } = this.props;
    getPersons();
  }

  componentDidCatch(e) {
    this.setState({
      error: e
    });
  }

  render() {
    const { persons, loading, firePerson, hirePerson } = this.props;
    const { error } = this.state;

    if (error) {
      return <div>{error.message}</div>;
    }

    return (
      <div>
        {loading > 0 && <Loading />}

        <h1>Fraktio Tussinaama ERP 15.0</h1>

        <Switch>
          <Route
            path="/"
            exact
            render={props => {
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
            path="/person/:id"
            exact
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
