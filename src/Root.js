import React from 'react';
import App from './pages/container/AppContainer';
import IndexPage from './pages/container/IndexPageContainer';
import PersonPage from './pages/container/PersonPageContainer';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

const Root = props => {
  const { store, history } = props;

  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={IndexPage} />
          <Route path="person/:id" component={PersonPage} />
        </Route>
      </Router>

    </Provider>
  );
};

export default Root;
