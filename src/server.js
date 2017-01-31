import uuid from 'uuid';
import bodyParser from 'body-parser';
import { createServer } from './utils/express';
import config from '../config.server';
import webpackConfig from '../webpack.config.babel';
import { List, Range, Map } from 'immutable';
import * as reducers from './ducks';

import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';

import ServerRoot from './ServerRoot';
import routes from './routes';
import { match, createMemoryHistory } from 'react-router';

import express from 'express';
import axios from 'axios';
import { trigger } from 'redial';
import promiseMiddleware from 'redux-promise-middleware';
import createLogger from 'redux-logger';

import thunk from 'redux-thunk';
import { createStore } from './utils/redux';
import Helmet from 'react-helmet';
import HtmlDocument from './HtmlDocument';
import manifest from '../dist/manifest.json';
import { setUserAgent } from './ducks/server';

/*
<HTMLDocument
  title={title}
  scripts={['/' + manifest['main.js']]}
  stylesheets={css.concat(['/' + manifest['main.css']])}
  metatags={[
    { name: 'charset', content: 'utf-8' }
  ]}
  universalState={store.getState()}
>
*/



const app = express();

app.use(bodyParser.json());

app.get('*', (req, res) => {

  const memoryHistory = createMemoryHistory(req.url);
  const { store, history } = createStore(
    reducers,
    memoryHistory,
    [
      thunk,
      promiseMiddleware(),
      createLogger()
    ],
    [],
  );

  // Goddamn da FUQ!
  store.dispatch(setUserAgent(req.headers['user-agent']));

  match({ routes, history }, (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message);
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {

        const { components } = renderProps;
        // Define locals to be provided to all lifecycle hooks:
        const locals = {
          path: renderProps.location.pathname,
          query: renderProps.location.query,
          params: renderProps.params,
          dispatch: store.dispatch,
        };

        trigger('fetch', components, locals).then(() => {




          const app = renderToString(
            <ServerRoot
              renderProps={renderProps}
              store={store}
              manifest={manifest}
            />
          );

          const head = Helmet.rewind();

          const html = (
            <HtmlDocument
              state={store.getState()}
              head={head}
              app={app}
              manifest={manifest}
              css={[]}
            />
          );

          res
            .status(200)
            .set({ 'content-type': 'text/html; charset=utf-8' })
            .send(
              "<!DOCTYPE html>\n" +
              renderToStaticMarkup(html),
            );
          }).catch(e => {
            console.log(e);
            res.status(500).send('errore');
          });
      } else {
        res.status(404).send('Not found');
      }
    });

});

const port = config.port + 1;

app.listen(port);
console.log('Listening on port ' + port);
