import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import App from './components/container/AppContainer';
import IndexPage from './components/container/IndexPageContainer';
import DetailPage from './components/container/DetailPageContainer';

const Root = props => {
  const { store, history } = props;
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={IndexPage} />
          <Route path="/detail/:id" component={DetailPage} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
