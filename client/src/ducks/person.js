import { Map } from "immutable";
import personService from "../services/person";

const defaultState = Map({
  persons: Map()
});

export const GET_PERSONS = "GET_PERSONS";
export const GET_PERSONS_PENDING = "GET_PERSONS_PENDING";
export const GET_PERSONS_FULFILLED = "GET_PERSONS_FULFILLED";
export const GET_PERSONS_REJECTED = "GET_PERSONS_REJECTED";

export const FIRE_PERSON = "FIRE_PERSON";
export const FIRE_PERSON_FULFILLED = "FIRE_PERSON_FULFILLED";
export const FIRE_PERSON_PENDING = "FIRE_PERSON_PENDING";

export const HIRE_PERSON = "HIRE_PERSON";
export const HIRE_PERSON_FULFILLED = "HIRE_PERSON_FULFILLED";

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

/*
[
[key, value],
[key, value]
]
*/

export default function personReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case HIRE_PERSON_FULFILLED:
      return state.setIn(["persons", payload.id], payload);

    case FIRE_PERSON_PENDING:
      return state.updateIn(["persons", payload], person => {
        return {
          ...person,
          isFiring: true
        };
      });

    case FIRE_PERSON_FULFILLED:
      return state.removeIn(["persons", payload]);

    case GET_PERSONS_FULFILLED:
      return state.set("persons", Map(payload.map(p => [p.id, p])));

    default:
      return state;
  }
}
