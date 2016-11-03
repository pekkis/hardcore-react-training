import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './pages/App';
import IndexPage from './pages/container/IndexPageContainer';

export default [
  <Route key="index" path="/" component={App}>
    <IndexRoute component={IndexPage} />
  </Route>
];
