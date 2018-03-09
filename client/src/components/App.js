import React from "react";
import "./App.pcss";
import Spinner from "./Spinner";
import IndexPage from "./async/AsyncIndexPage";
import PersonPage from "./async/AsyncPersonPage";
import { Switch, Route } from "react-router";
import { observer } from "mobx-react";

@observer
class App extends React.Component {
  componentDidMount() {
    this.props.store.getPersons();

    /*
    const { getPersons, persons } = this.props;
    if (persons.count() > 0) {
      return;
    }
    getPersons();
    */
  }

  render() {
    const { store } = this.props;

    console.log(this.props.store.persons, "puuppas");

    /*
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
    */

    return (
      <div>
        {false && <Spinner />}

        <h1>
          <img
            alt="Tussinaama ERP LOGO"
            src={require("../assets/trollo.png")}
          />
          Fraktio Tussinaama ERP 6.66
        </h1>

        <Switch>
          <Route
            exact
            path="/"
            render={props => {
              return <IndexPage persons={store.persons} firing={false} />;
            }}
          />
          <Route
            exact
            path="/person/:id"
            render={props => {
              const id = props.match.params.id;
              const person = store.persons.find(p => p.id === id);
              return <PersonPage person={person} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
