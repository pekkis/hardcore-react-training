import React from 'react';

import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from '../node_modules/react-router';

import App from './components/containers/AppContainer';
import IndexPage from './pages/containers/IndexPageContainer';
import PersonPage from './pages/containers/PersonPageContainer';

const Root = props => {

  const { store, history } = props;

  // context
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
