import React from "react";
import Loading from "./Loading";
import IndexPage from "./IndexPage";
import PersonPage from "./PersonPage";
import { Switch, Route } from "react-router";
import "./App.pcss";

class App extends React.Component {
  state = {
    error: undefined
  };

  componentDidCatch(e) {
    this.setState((state, props) => {
      return {
        error: e
      };
    });
  }

  render() {
    const { persons, firePerson, hirePerson, loading, firing } = this.props;
    const { error } = this.state;

    if (error) {
      return (
        <div>
          <h2>Oh noes! Something went wrong! Pls reload da page!</h2>
        </div>
      );
    }

    return (
      <div>
        {loading > 0 && <Loading />}

        <h1>
          <img src={require("../assets/trollo.png")} alt="Trollo!" />
          Fraktio Tussinaama ERP 777.7
        </h1>

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
                  firing={firing}
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
