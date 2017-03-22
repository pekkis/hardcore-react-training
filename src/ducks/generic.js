import { Map } from 'immutable';

const defaultState = Map({
  loading: 0,
  errorMessage: false,
});

export default function (state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {

    case 'PERSON_GET_PERSONS_PENDING':
      return state.update('loading', l => l + 1);

    case 'PERSON_GET_PERSONS_REJECTED':
      return state
        .update('loading', l => l - 1)
        .set('errorMessage', payload.message);

    case 'PERSON_GET_PERSONS_FULFILLED':
      return state.update('loading', l => l - 1);

    default:
      return state;
  }
}
