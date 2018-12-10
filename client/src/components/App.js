import React, { Suspense, lazy } from "react";
import Loading from "./Loading";
import { Switch, Route } from "react-router";

// import IndexPage from "./IndexPage";
// import PersonPage from "./PersonPage";
import "./App.pcss";

const IndexPage = lazy(() => import("./IndexPage"));
const PersonPage = lazy(() => import("./PersonPage"));

class App extends React.Component {
  componentDidMount() {
    const { getPersons } = this.props;
    getPersons();
  }

  render() {
    const { persons, hirePerson, firePerson, loading } = this.props;

    return (
      <div>
        <h1>Fraktio ERP 9999</h1>

        {loading && <Loading />}

        <Switch>
          <Route
            path="/"
            exact
            render={props => {
              return (
                <Suspense fallback={<div>laddare!!!</div>}>
                  <IndexPage
                    persons={persons}
                    hirePerson={hirePerson}
                    firePerson={firePerson}
                  />
                </Suspense>
              );
            }}
          />
          <Route
            path="/person/:id"
            exact
            render={props => {
              const pid = props.match.params.id;
              const person = persons.get(pid);
              return (
                <Suspense fallback={<div>laddare!!!</div>}>
                  <PersonPage person={person} />
                </Suspense>
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
