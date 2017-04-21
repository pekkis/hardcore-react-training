import { Map } from 'immutable';

const defaultState = Map({
  loading: 0,
});

export default function (state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {

    case 'PERSON_GET_PERSONS_PENDING':
      return state.update('loading', l => l + 1);

    case 'PERSON_GET_PERSONS_FULFILLED':
    case 'PERSON_GET_PERSONS_REJECTED':
      return state.update('loading', l => l - 1);

    default:
      return state;
  }
}
