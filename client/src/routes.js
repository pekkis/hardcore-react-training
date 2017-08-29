import { getPersons } from './ducks/person';

const routes = {
  HOME: {
    path: '/',
    thunk: (dispatch, getState) => {
      return dispatch(getPersons());
    },
  },
  USER: {
    path: '/user/:id',
    thunk: (dispatch, getState) => {
      return dispatch(getPersons());
    }
  },
};

export default routes;
