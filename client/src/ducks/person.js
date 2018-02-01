import { List, Map } from "immutable";
import personService from "../services/person";

const defaultState = Map({
  persons: List()
});

export const firePerson = id => {
  return {
    type: "FIRE_PERSON",
    payload: id
  };
}

export const hirePerson = person => {
  return {
    type: "HIRE_PERSON",
    payload: person
  };
}

export const getPersons = () => {
  return {
    type: "GET_PERSONS",
    payload: personService.getPersons()
  };
}

export default function personReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case "GET_PERSONS_FULFILLED":
      return state.set("persons", List(payload));

    case "HIRE_PERSON":
      return state.update(
        "persons",
        p => p.push(payload)
      );

    case "FIRE_PERSON":
      // TODO: optimize!
      return state.update(
        "persons",
        persons => persons.filter(p => p.id !== payload)
      );

    default:
      return state;
  }
}
