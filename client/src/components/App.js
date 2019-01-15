import React from "react";
import Loading from "./Loading";
import IndexPage from "./containers/IndexPageContainer";
import PersonPage from "./containers/PersonPageContainer";

import { Switch, Route } from "react-router";

import "./App.pcss";

class App extends React.PureComponent {
  async componentDidMount() {
    const { getPersons } = this.props;
    getPersons();
  }

  render() {
    const { loading } = this.props;

    return (
      <div>
        {loading && <Loading />}
        <h1>Fraktio ERP 5000</h1>

        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/person/:id" exact component={PersonPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
