import { List, Map } from "immutable";
import personService from "../services/person";

const defaultState = Map({
  persons: List()
});

const HIRE_PERSON = "HIRE_PERSON";
const FIRE_PERSON = "FIRE_PERSON";

const GET_PERSONS_PENDING = "GET_PERSONS_PENDING";
const GET_PERSONS_FULFILLED = "GET_PERSONS_FULFILLED";
const GET_PERSONS_REJECTED = "GET_PERSONS_REJECTED";

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
    payload: person
  };
};

export const firePerson = id => {
  return {
    type: FIRE_PERSON,
    payload: id
  };
};

export default function personReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case HIRE_PERSON:
      return state.update("persons", persons => persons.push(payload));

    case FIRE_PERSON:
      return state.update("persons", persons =>
        persons.filter(p => p.id !== payload)
      );

    case GET_PERSONS_FULFILLED:
      return state.set("persons", List(payload));

    default:
      return state;
  }
}
