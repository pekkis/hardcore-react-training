import { Map, List } from "immutable";
import personService from "../services/person";

const initialState = Map({
  persons: Map(),
  loading: 0
});

export const FIRE_PERSON = "FIRE_PERSON";
export const FIRE_PERSON_PENDING = "FIRE_PERSON_PENDING";
export const FIRE_PERSON_FULFILLED = "FIRE_PERSON_FULFILLED";
export const FIRE_PERSON_REJECTED = "FIRE_PERSON_REJECTED";

export const HIRE_PERSON = "HIRE_PERSON";
export const HIRE_PERSON_PENDING = "HIRE_PERSON_PENDING";
export const HIRE_PERSON_FULFILLED = "HIRE_PERSON_FULFILLED";
export const HIRE_PERSON_REJECTED = "HIRE_PERSON_REJECTED";

export const GET_PERSONS_PENDING = "GET_PERSONS_PENDING";
export const GET_PERSONS_REJECTED = "GET_PERSONS_REJECTED";
export const GET_PERSONS_FULFILLED = "GET_PERSONS_FULFILLED";

export const firePerson = id => {
  return {
    type: FIRE_PERSON,
    payload: {
      promise: personService.firePerson(id),
      data: id
    }
  };
};

export const hirePerson = person => {
  return {
    type: HIRE_PERSON,
    payload: personService.hirePerson(person)
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
      key: "value",
      key2: "value"
    })

    Map([
      [key, value],
      [key, value]
    ])
    */

export default function personReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FIRE_PERSON_PENDING:
      return state
        .updateIn(["persons", payload], person => {
          return {
            ...person,
            isBeingFired: true
          };
        })
        .update("loading", l => l + 1);

    case GET_PERSONS_PENDING:
    case HIRE_PERSON_PENDING:
      return state.update("loading", l => l + 1);

    case FIRE_PERSON_REJECTED:
    case GET_PERSONS_REJECTED:
    case HIRE_PERSON_REJECTED:
      return state.update("loading", l => l - 1);

    case FIRE_PERSON_FULFILLED:
      return state
        .deleteIn(["persons", payload.id])
        .update("loading", l => l - 1);
    // .update("persons", persons => persons.filter(p => p.id !== payload.id))

    case HIRE_PERSON_FULFILLED:
      return state
        .setIn(["persons", payload.id], payload)
        .update("loading", l => l - 1);
    // .update("persons", persons => persons.push(payload))

    case GET_PERSONS_FULFILLED:
      return state
        .set("persons", Map(payload.map(p => [p.id, p])))
        .update("loading", l => l - 1);

    default:
      return state;
  }
}
