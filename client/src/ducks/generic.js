import { Map, List } from "immutable";
import { getPersons } from "../services/person";

const defaultState = Map({
  persons: List(),
  loading: 0
});

export function addPerson(person) {
  return {
    type: "ADD_PERSON",
    payload: person
  };
}

export function deletePerson(id) {
  return {
    type: "DELETE_PERSON",
    payload: id
  };
}

export function fetchPersons() {
  return {
    type: "FETCH_PERSONS",
    payload: getPersons
  };
}

export default function genericReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {

    case "FETCH_PERSONS_PENDING":
      return state.update("loading", l => l + 1);

    case "FETCH_PERSONS_FULFILLED":
      return state
        .set("persons", List(payload))
        .update("loading", l => l - 1)

    case "ADD_PERSON":
      return state.update("persons", persons => persons.push(payload));

    case "DELETE_PERSON":
      return state.update("persons", persons => persons.filter(p => p.id !== payload));

    default:
      return state;

  }
}
