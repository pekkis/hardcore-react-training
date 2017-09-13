import { List, Map } from 'immutable';
import personService from "../services/person";

const defaultState = Map({
  loading: false,
  persons: List()
});

export function firePerson(person) {
  return {
    type: 'FIRE_PERSON',
    payload: person,
  };
}

export function hirePerson(person) {
  return {
    type: 'HIRE_PERSON',
    payload: person,
  };
}

export function getPersons() {
  return {
    type: 'GET_PERSONS',
    payload: personService.getPersons(),
  }
}

export default function personReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {

    case 'FIRE_PERSON':
      return state.update('persons', persons => persons.filterNot(p => p.id === payload.id));

    case 'HIRE_PERSON':
      return state.update('persons', persons => persons.push(payload));

    case 'GET_PERSONS_PENDING':
      return state.set('loading', true);

    case 'GET_PERSONS_FULFILLED':
      return state
        .set('persons', List(payload))
        .set('loading', false)
      ;

    default:
      return state;
  }
}
