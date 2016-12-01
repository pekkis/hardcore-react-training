import { List, Map } from 'immutable';
import personService from '../services/person';

const defaultState = Map({
  persons: List()
});


export function addPerson(person) {
  return {
    type: 'PERSON_ADD',
    payload: person,
  };
}

export function deletePerson(person) {
  return {
    type: 'PERSON_DELETE',
    payload: person,
  };
}

export function getPersons() {
  return {
    type: 'PERSON_GET',
    payload: personService.getPersons(),
  };
}

export default function (state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {

    case 'PERSON_ADD':
      return state
        .update('persons', persons => persons.push(payload));

      case 'PERSON_DELETE':
        return state
          .update('persons', persons => persons.filterNot(p => p.id === payload.id));

      case 'PERSON_GET_FULFILLED':
        return state.set('persons', List(payload));

    default:
      return state;
  }
}
