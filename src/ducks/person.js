import { List, Map } from 'immutable';
import personService from '../services/personService';

const defaultState = Map({
  persons: List(),
});

export function getPersons() {
  return {
    type: 'PERSON_GET_PERSONS',
    payload: personService.getPersons(),
  };
}

export function deletePerson(id) {
  return {
    type: 'PERSON_DELETE_PERSON',
    payload: id,
  };
}

export function addPerson(person) {
  return {
    type: 'PERSON_ADD_PERSON',
    payload: person,
  };
}

export default function (state = defaultState, action) {

  const { type, payload } = action;

  switch (type) {

    case 'PERSON_GET_PERSONS_FULFILLED':
      return state.set('persons', List(payload));

    case 'PERSON_DELETE_PERSON':
      return state.update('persons', persons => persons.filter(p => p.id !== payload));

    case 'PERSON_ADD_PERSON':
      return state.update('persons', persons => persons.push(payload));

    default:
      return state;
  }
}
