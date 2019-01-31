import { List, Map } from "immutable";
import personService from "../services/person";

const defaultState = Map({
  persons: Map()
});

const HIRE_PERSON = "HIRE_PERSON";
const HIRE_PERSON_FULFILLED = "HIRE_PERSON_FULFILLED";
const HIRE_PERSON_PENDING = "HIRE_PERSON_PENDING";
const HIRE_PERSON_REJECTED = "HIRE_PERSON_REJECTED";

const FIRE_PERSON = "FIRE_PERSON";
const FIRE_PERSON_FULFILLED = "FIRE_PERSON_FULFILLED";
const FIRE_PERSON_PENDING = "FIRE_PERSON_PENDING";
const FIRE_PERSON_REJECTED = "FIRE_PERSON_REJECTED";

const GET_PERSONS_PENDING = "GET_PERSONS_PENDING";
const GET_PERSONS_FULFILLED = "GET_PERSONS_FULFILLED";
const GET_PERSONS_REJECTED = "GET_PERSONS_REJECTED";

export const hirePerson = person => {
  return {
    type: HIRE_PERSON,
    payload: personService.hirePerson(person)
  };
};

export const firePerson = id => {
  return {
    type: FIRE_PERSON,
    payload: {
      promise: personService.firePerson(id),
      data: id
    }
  };
};

export const getPersons = () => {
  return async dispatch => {
    dispatch({
      type: GET_PERSONS_PENDING
    });

    try {
      const persons = await personService.getPersons();
      dispatch({
        type: GET_PERSONS_FULFILLED,
        payload: persons
      });
    } catch (e) {
      dispatch({
        type: GET_PERSONS_REJECTED,
        payload: e,
        error: true
      });
    }
  };
};

/*
Map({
  keys: values
})

Map(array);

Map([
  [key, value],
  [key, value],
  [key, value],
  ...
])

*/

export default function personReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case HIRE_PERSON_FULFILLED:
      return state.setIn(["persons", payload.id], payload);

    case FIRE_PERSON_FULFILLED:
      return state.removeIn(["persons", payload]);

    case GET_PERSONS_FULFILLED:
      return state.set("persons", Map(payload.map(p => [p.id, p])));

    case FIRE_PERSON_PENDING:
      return state.updateIn(["persons", payload], person => {
        return {
          ...person,
          isBeingFired: true
        };
      });

    default:
      return state;
  }
}
