import { Map, List } from "immutable";
import personService from "../services/person";

const defaultState = Map({
  persons: List()
});

export const firePerson = id => {
  return {
    type: "FIRE_PERSON",
    payload: personService.firePerson(id)
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
          payload: persons
        });
      })
      .catch(e => {
        dispatch({
          type: "GET_PERSONS_REJECTED"
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

    case "FIRE_PERSON_FULFILLED":
      return state.update("persons", persons =>
        persons.filterNot(p => p.id === payload)
      );

    case "HIRE_PERSON_FULFILLED":
      return state.update("persons", persons => persons.push(payload));

    default:
      return state;
  }
}
