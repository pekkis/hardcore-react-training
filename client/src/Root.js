import React from 'react';
import App from './components/container/AppContainer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import de from 'react-intl/locale-data/de';
import fi from 'react-intl/locale-data/fi';

addLocaleData([...en, ...de, ...es, ...fi]);

const Root = props => {
  const { store } = props;
  return (
    <Provider store={store}>
      <BrowserRouter>
        <IntlProvider locale="en-US">
          <App />
        </IntlProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
