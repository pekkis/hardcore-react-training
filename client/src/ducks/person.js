import { Map, List, Set } from "immutable";
import personService from "../services/person";

const defaultState = Map({
  persons: List(),
  firing: Set()
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
    payload: person
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
          payload: persons
        });
      })
      .catch(e => {
        dispatch({
          type: "GET_PERSONS_REJECTED",
          payload: e,
          error: true
        });
      });
  };
  */
};

export default function personReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case "GET_PERSONS_FULFILLED":
      return state.set("persons", List(payload));

    case "FIRE_PERSON_PENDING":
      return state.update("firing", firing => firing.add(payload));

    case "HIRE_PERSON":
      return state.update("persons", persons => persons.push(payload));

    case "FIRE_PERSON_FULFILLED":
      return state.update("persons", persons =>
        persons.filterNot(p => p.id === payload)
      );

    default:
      return state;
  }
}
