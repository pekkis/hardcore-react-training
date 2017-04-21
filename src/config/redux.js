import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import * as reducers from '../ducks';

console.log(reducers);

export function getMiddlewares() {
  let middleware = [
    thunk,
    promiseMiddleware(),
  ];

  if (__DEVELOPMENT__) {
    middleware = middleware.concat([logger]);
  }

  return middleware;
}

export function getRoutes() {
  const routes = {
    '/': {
      title: 'Main',

      '/home': {
        title: 'lubs',
      },

      '/person/:id': {
        title: 'Person page',
      },
    },
  };

  return routes;
}

export function getReducers() {
  return reducers;
}

export function getEnhancers() {
  return [];
}
