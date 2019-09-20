import { List, Map } from "immutable";

export const FIRE_PERSON = "FIRE_PERSON";
export const FIRE_PERSON_PENDING = "FIRE_PERSON_PENDING";
export const FIRE_PERSON_REJECTED = "FIRE_PERSON_REJECTED";
export const FIRE_PERSON_FULFILLED = "FIRE_PERSON_FULFILLED";

export const HIRE_PERSON = "HIRE_PERSON";
export const HIRE_PERSON_PENDING = "HIRE_PERSON_PENDING";
export const HIRE_PERSON_REJECTED = "HIRE_PERSON_REJECTED";
export const HIRE_PERSON_FULFILLED = "HIRE_PERSON_FULFILLED";

export const GET_PERSONS = "GET_PERSONS";
export const GET_PERSONS_PENDING = "GET_PERSONS_PENDING";
export const GET_PERSONS_REJECTED = "GET_PERSONS_REJECTED";
export const GET_PERSONS_FULFILLED = "GET_PERSONS_FULFILLED";

const defaultState = Map({
  persons: Map()
});

export const getPersons = () => {
  return {
    type: GET_PERSONS
  };
};

export const firePerson = id => {
  return {
    type: FIRE_PERSON,
    payload: id
  };
};

export const hirePerson = person => {
  return {
    type: HIRE_PERSON,
    payload: person
  };
};

/*
  dispatch({ type: GET_PERSONS });
  dispatch(getPersons());
*/

/*

  Map({
    key: value
  })

  Map([
    [key, value],
    [key, value]
  ])

*/

export default function personReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case FIRE_PERSON_PENDING:
      return state.updateIn(["persons", payload], person => {
        return {
          ...person,
          isBeingFired: true
        };
      });

    case GET_PERSONS_FULFILLED:
      return state.set("persons", Map(payload.map(p => [p.id, p])));
    case FIRE_PERSON_FULFILLED:
      return state.deleteIn(["persons", payload]);
    case HIRE_PERSON_FULFILLED:
      return state.setIn(["persons", payload.id], payload);

    default:
      return state;
  }
}
