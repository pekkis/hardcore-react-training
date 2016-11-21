import React from 'react';
import App from './components/container/AppContainer';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import IndexPage from './pages/container/IndexPageContainer';
import UserPage from './pages/container/UserPageContainer';

const Root = props => {
  const { history, store } = props;

  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={IndexPage} />
          <Route path="user/:id" component={UserPage} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
