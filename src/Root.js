import React from 'react';
import WebfontLoader from '@dr-kobros/react-webfont-loader';
import { addLocaleData, IntlProvider } from 'react-intl';
import fi from 'react-intl/locale-data/fi';
import en from 'react-intl/locale-data/en';
import no from 'react-intl/locale-data/no';
import App from './components/App';

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
  return (
    <WebfontLoader config={config} onStatus={callback}>
      <IntlProvider locale="fi">
        <App />
      </IntlProvider>
    </WebfontLoader>
  );
};

export default Root;
