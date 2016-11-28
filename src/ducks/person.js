import { List, Map } from 'immutable';
import persons from '../services/person-service';

export function getPersons() {
  return {
    type: 'PERSON_GET_PERSONS',
    payload: persons.all(),
  };
}

export function deletePerson(id) {

  console.log('hellurei', id);

  return {
    type: 'PERSON_DELETE_PERSON',
    payload: id,
  };
}

const defaultState = Map({
  persons: List(),
});

export default function (state = defaultState, action) {
  const { type, payload } = action;
  switch (type) {

    case 'PERSON_GET_PERSONS_FULFILLED':
      return state.set('persons', List(payload));

    case 'PERSON_DELETE_PERSON':
      return state.update('persons', persons => persons.filterNot(p => p.id === payload));

    default:
      return state;
  }
}
