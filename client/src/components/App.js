import React from "react";
import Spinner from "./Spinner";

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
        {loading && <Spinner />}

        <h1>Hello React Training!</h1>

        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/person/:id" exact component={PersonPage} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
