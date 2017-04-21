import React from 'react';
import WebfontLoader from '@dr-kobros/react-webfont-loader';
import { addLocaleData, IntlProvider } from 'react-intl';
import fi from 'react-intl/locale-data/fi';
import en from 'react-intl/locale-data/en';
import no from 'react-intl/locale-data/no';
import App from './components/container/AppContainer';
import { Provider } from 'react-redux';
import { RouterProvider } from 'redux-little-router';

addLocaleData([...fi, ...en, ...no]);

const config = {
  google: {
    families: ['Source Sans Pro:300,600'],
  }
};

const callback = status => {
  console.log(status);
};

const Root = props => {

  const { store } = props;

  return (
    <RouterProvider store={store}>
      <Provider store={store}>
        <WebfontLoader config={config} onStatus={callback}>
          <IntlProvider locale="fi">
            <App />
          </IntlProvider>
        </WebfontLoader>
      </Provider>
    </RouterProvider>
  );
};

export default Root;
