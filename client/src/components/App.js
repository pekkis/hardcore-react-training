import React, { Suspense } from "react";
import Loading from "./Loading";

import { Switch, Route } from "react-router";

import "./App.pcss";

const IndexPage = React.lazy(() => import("./containers/IndexPageContainer"));
const PersonPage = React.lazy(() => import("./containers/PersonPageContainer"));

const lazyPage = Component => props => {
  return (
    <div>
      <Suspense fallback={<div>Laddare!!!...</div>}>
        <Component {...props} />
      </Suspense>
    </div>
  );
};

class App extends React.PureComponent {
  state = {
    isError: false
  };

  static getDerivedStateFromError(error) {
    return { isError: true, error };
  }

  static componentDidCatch(error, moarError) {
    // LOG ERROR TO SENTRY ETC HERE
  }

  componentDidMount() {
    const { getPersons } = this.props;
    getPersons();
  }

  render() {
    const { loading } = this.props;

    if (this.state.isError) {
      return <div>OH NOES GRANDE PUUPPA</div>;
    }

    return (
      <div>
        {loading && <Loading />}

        <h1>Fraktio ERP</h1>

        <Switch>
          <Route path="/" exact component={lazyPage(IndexPage)} />
          <Route path="/person/:id" exact component={lazyPage(PersonPage)} />
        </Switch>
      </div>
    );
  }
}

export default App;
