import React, { Suspense, lazy } from "react";

import "./App.pcss";
import Loading from "./Loading";
// import IndexPage from "./IndexPage";
// import PersonPage from "./PersonPage";
import { Switch, Route } from "react-router";

const IndexPage = lazy(() => import("./IndexPage"));
const PersonPage = lazy(() => import("./PersonPage"));

class App extends React.PureComponent {
  componentDidMount() {
    this.props.getPersons();
  }

  render() {
    const { persons, loading, hirePerson, firePerson } = this.props;

    return (
      <div>
        {loading > 0 && <Loading />}

        <h1>Fraktio ERP 6666</h1>

        <Switch>
          <Route
            exact
            path="/"
            render={props => {
              return (
                <Suspense fallback={<div>Laddare!</div>}>
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
            exact
            path="/person/:id"
            render={props => {
              console.log(props);
              const person = persons.get(props.match.params.id);
              return (
                <Suspense fallback={<div>Laddare!</div>}>
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
