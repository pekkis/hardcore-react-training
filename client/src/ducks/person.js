import { List, Map } from "immutable";
import personService from "../services/person";

const defaultState = Map({
  persons: List()
});

export const firePerson = id => {
  return {
    type: "FIRE_PERSON",
    payload: {
      promise: personService.firePerson(id),
      data: id
    }
  };
};

export const hirePerson = person => {
  return {
    type: "HIRE_PERSON",
    payload: personService.hirePerson(person)
  };
};

export const getPersons = () => {
  return {
    type: "GET_PERSONS",
    payload: personService.getPersons()
  };

  /*
  return dispatch => {
    dispatch({
      type: "GET_PERSONS_PENDING"
    });

    personService
      .getPersons()
      .then(persons => {
        dispatch({
          type: "GET_PERSONS_FULFILLED",
          payload: List(persons)
        });
      })
      .catch(e => {
        dispatch({
          type: "GET_PERSONS_REJECTED",
          error: true,
          payload: e
        });
      });
  };
  */
};

export default function personReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case "HIRE_PERSON_FULFILLED":
      return state.update("persons", persons => persons.push(payload));

    case "FIRE_PERSON_FULFILLED":
      return state.update("persons", persons =>
        persons.filter(p => p.id !== payload)
      );

    case "FIRE_PERSON_PENDING":
      return state.updateIn(
        ["persons", state.get("persons").findIndex(p => p.id === payload)],
        p => {
          return {
            ...p,
            firing: true
          };
        }
      );

    case "GET_PERSONS_FULFILLED":
      return state.set("persons", List(payload));

    default:
      return state;
  }
}
