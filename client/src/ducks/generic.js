import { List, Map } from "immutable";
import personService from "../services/personService";

const defaultState = Map({
  persons: List()
});

export function getPersons() {
  return {
    type: "GET_PERSONS",
    payload: personService.getPersons()
  };
}

export function deletePerson(person) {
  return {
    type: "DELETE_PERSON",
    payload: person
  };
}

export function addPerson(person) {
  return {
    type: "ADD_PERSON",
    payload: person
  };
}

export default function(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_PERSON":
      return state.update("persons", persons => persons.push(payload));

    case "DELETE_PERSON":
      return state.update("persons", persons =>
        persons.filterNot(p => p.id === payload.id)
      );

    case "GET_PERSONS_FULFILLED":
      return state.set("persons", List(payload));

    default:
      return state;
  }
}
