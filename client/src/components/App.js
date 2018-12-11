import React, { lazy, Suspense } from "react";
import Loading from "./Loading";
import { Switch, Route } from "react-router";

import "./App.pcss";

// import IndexPage from "./containers/IndexPageContainer";
// import PersonPage from "./containers/PersonPageContainer";

const IndexPage = lazy(() => import("./containers/IndexPageContainer"));
const PersonPage = lazy(() => import("./containers/PersonPageContainer"));

const lazyPage = Component => props => {
  return (
    <Suspense fallback={<div>laddare!</div>}>
      <Component {...props} />
    </Suspense>
  );
};

class App extends React.PureComponent {
  componentDidMount() {
    const { getPersons } = this.props;
    getPersons();
  }

  render() {
    const { loading } = this.props;

    return (
      <div>
        {loading && <Loading />}
        <header>
          <h1>Fraktio GIGA ERP</h1>
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={lazyPage(IndexPage)} />
            <Route path="/person/:id" exact component={lazyPage(PersonPage)} />
          </Switch>
        </main>
        <footer>Copyright &copy; 2018 Pekkis</footer>
      </div>
    );
  }
}

export default App;
