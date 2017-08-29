import { List, Map } from 'immutable';
import personService from '../services/person';

const defaultState = Map({
  persons: List(),
});

export function getPersons() {
  return {
    type: 'GET_PERSONS',
    payload: personService.getPersons(),
  };
}

export default function (state = defaultState, action) {
  const { type, payload } = action;
  switch (type) {

    case 'GET_PERSONS_FULFILLED':
      return state.set('persons', payload);

    case 'SET_EXAMPLE':
      return state.set('example', payload);

    default:
      return state;
  }
}
