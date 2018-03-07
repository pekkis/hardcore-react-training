import React from "react";
import "./App.pcss";
import Spinner from "./Spinner";
import IndexPage from "./async/AsyncIndexPage";
import PersonPage from "./async/AsyncPersonPage";
import { Switch, Route } from "react-router";

class App extends React.PureComponent {
  componentDidMount() {
    const { getPersons, persons } = this.props;
    if (persons.count() > 0) {
      return;
    }
    getPersons();
  }

  render() {
    let {
      persons,
      firing,
      loading,
      hirePerson,
      firePerson,
      filters,
      setFilter
    } = this.props;
    persons = persons.sortBy(p => p.firstName).sortBy(p => p.lastName);

    return (
      <div>
        {loading > 0 && <Spinner />}

        <h1>
          <img
            alt="Tussinaama ERP LOGO"
            src={require("../assets/trollo.png")}
          />
          Fraktio Tussinaama ERP 5.0
        </h1>

        <Switch>
          <Route
            exact
            path="/"
            render={props => {
              return (
                <IndexPage
                  persons={persons}
                  firing={firing}
                  hirePerson={hirePerson}
                  firePerson={firePerson}
                  filters={filters}
                  setFilter={setFilter}
                />
              );
            }}
          />
          <Route
            exact
            path="/person/:id"
            render={props => {
              const id = props.match.params.id;
              const person = persons.find(p => p.id === id);
              return <PersonPage person={person} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
