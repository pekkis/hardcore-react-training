import { List } from "immutable";
import personService from "../services/person";

const defaultState = List();

export const FIRE_PERSON = "FIRE_PERSON";
export const HIRE_PERSON = "HIRE_PERSON";

export const GET_PERSONS = "GET_PERSONS";

export const hirePerson = person => {
  return {
    type: HIRE_PERSON,
    payload: person
  };
};

export const getPersons = () => {
  return async dispatch => {
    const persons = await personService.getPersons();
    dispatch({
      type: GET_PERSONS,
      payload: persons
    });
  };
};

export default function personReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PERSONS:
      return List(payload);

    case HIRE_PERSON:
      return state.push(payload);

    case FIRE_PERSON:
      return state.filter(p => p.id !== payload);

    default:
      return state;
  }
}
