import React from 'react';
import { RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import HTMLDocument from 'react-html-document';
import Helmet from 'react-helmet';
import { IntlProvider } from 'react-intl';

const Root = props => {

  const { store, renderProps, title, css, manifest } = props;

  return (
    <Provider store={store}>
      <IntlProvider locale="fi">
        <RouterContext {...renderProps} />
      </IntlProvider>
    </Provider>
  );
};

export default Root;
