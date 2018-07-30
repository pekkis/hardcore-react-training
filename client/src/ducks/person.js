import { List, Map } from "immutable";
import personService from "../services/person";

const defaultState = Map({
  persons: List(),
  loading: 0
});

export const firePerson = id => {
  return {
    type: "FIRE_PERSON",
    payload: personService.firePerson(id)
  };
};

export const getPersons = () => {
  return {
    type: "GET_PERSONS",
    payload: personService.getPersons()
  };
};

export default function personReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case "GET_PERSONS_PENDING":
    case "FIRE_PERSON_PENDING":
      return state.update("loading", loading => loading + 1);

    case "GET_PERSONS_REJECTED":
    case "FIRE_PERSON_REJECTED":
      return state.update("loading", loading => loading - 1);

    case "FIRE_PERSON_FULFILLED":
      return state
        .update("persons", persons => persons.filter(p => p.id !== payload))
        .update("loading", loading => loading - 1);

    case "GET_PERSONS_FULFILLED":
      return state
        .set("persons", List(payload))
        .update("loading", loading => loading - 1);

    default:
      return state;
  }
}
