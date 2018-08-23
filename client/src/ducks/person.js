import { Map, List, Record } from "immutable";
import personService from "../services/person";

const defaultState = Map({
  persons: Map()
});

const HIRE_PERSON = "HIRE_PERSON";
const HIRE_PERSON_PENDING = "HIRE_PERSON_PENDING";
const HIRE_PERSON_FULFILLED = "HIRE_PERSON_FULFILLED";
const HIRE_PERSON_REJECTED = "HIRE_PERSON_FULFILLED";

const FIRE_PERSON = "FIRE_PERSON";
const FIRE_PERSON_PENDING = "FIRE_PERSON_PENDING";
const FIRE_PERSON_FULFILLED = "FIRE_PERSON_FULFILLED";
const FIRE_PERSON_REJECTED = "FIRE_PERSON_FULFILLED";

const GET_PERSONS = "GET_PERSONS";
const GET_PERSONS_PENDING = "GET_PERSONS_PENDING";
const GET_PERSONS_FULFILLED = "GET_PERSONS_FULFILLED";
const GET_PERSONS_REJECTED = "GET_PERSONS_REJECTED";

export const getPersons = () => {
  /*
  return {
    type: GET_PERSONS,
    payload: personService.getPersons()
  };
  */

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

const PersonRecord = Record({
  id: undefined,
  firstName: undefined,
  lastName: undefined,
  age: undefined,
  birthDay: undefined,
  gender: undefined,
  firing: false
});

export default function personReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case FIRE_PERSON_PENDING:
      return state.setIn(["persons", payload, "firing"], true);

    case FIRE_PERSON_FULFILLED:
      return state.deleteIn(["persons", payload]);

    case HIRE_PERSON_FULFILLED:
      return state.setIn(["persons", payload.id], new PersonRecord(payload));

    case GET_PERSONS_FULFILLED:
      return state.set(
        "persons",
        Map(payload.map(p => [p.id, new PersonRecord(p)]))
      );

    default:
      return state;
  }
}
