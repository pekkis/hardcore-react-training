import React from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { Route, IndexRoute } from 'react-router';
import App from './pages/App';
import IndexPage from './pages/container/IndexPageContainer';
import WebfontLoader from '@dr-kobros/react-webfont-loader';
import { IntlProvider } from 'react-intl';

const Root = props => {
  const { store, history, webfonts } = props;

  const callback = status => {
    console.log(status, 'webfont status change');
  };

  return (
    <WebfontLoader callback={callback} config={webfonts}>
      <Provider store={store}>
        <IntlProvider locale="fi">
          <Router history={history}>
            <Route path="/" component={App}>
              <IndexRoute component={IndexPage} />
            </Route>
          </Router>
        </IntlProvider>
      </Provider>
    </WebfontLoader>
  );
};

export default Root;
