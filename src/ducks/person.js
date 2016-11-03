import { List, Map } from 'immutable';
import persons from '../services/person-service';
import R from 'ramda';

export function getPersons() {
  return {
    type: 'PERSONS_GET',
    payload: persons.all(),
  };
}

const defaultState = {
  persons: [],
};

export default function (state = defaultState, action) {
  const { type, payload } = action;
  switch (type) {

    case 'PERSONS_GET_FULFILLED':
      return R.assoc('persons', payload, state);

    default:
      return state;
  }
}
