import { List, Map } from 'immutable';

const defaultState = Map({
  loading: 0,
});

export default function (state = defaultState, action) {
  const { type, payload } = action;
  switch (type) {

    case 'PERSON_GET_PERSONS_PENDING':
      return state.update('loading', loading => loading + 1);

    case 'PERSON_GET_PERSONS_FULFILLED':
      return state.update('loading', loading => loading - 1);

    default:
      return state;
  }
}
