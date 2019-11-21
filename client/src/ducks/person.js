import { Map, List } from "immutable";

const defaultState = Map({
  persons: Map(),
  loadingCount: 0
});

export const INCREMENT_LOADING = "INCREMENT_LOADING";
export const DECREMENT_LOADING = "DECREMENT_LOADING";

export const HIRE_PERSON = "HIRE_PERSON";
export const HIRE_PERSON_FULFILLED = "HIRE_PERSON_FULFILLED";

export const FIRE_PERSON = "FIRE_PERSON";
export const FIRE_PERSON_FULFILLED = "FIRE_PERSON_FULFILLED";

export const GET_PERSONS = "GET_PERSONS";
export const GET_PERSONS_FULFILLED = "GET_PERSONS_FULFILLED";

export default function personReducer(state = defaultState, action) {
  /*
  {
    type: string,
    payload: any
  }
  */

  /*

  Map([
    [key, value],
    [key, value],
    [key, value]
  ])

  */

  const { type, payload } = action;

  switch (type) {
    case FIRE_PERSON:
      return state.updateIn(["persons", payload], person => {
        return {
          ...person,
          isBeingFired: true
        };
      });

    case DECREMENT_LOADING:
      return state.update("loadingCount", c => c - 1);

    case INCREMENT_LOADING:
      return state.update("loadingCount", c => c + 1);

    case FIRE_PERSON_FULFILLED:
      return state.deleteIn(["persons", payload]);
    /*
    return state.update("persons", persons =>
        persons.filter(p => p.id !== payload)
      );
      */

    case HIRE_PERSON_FULFILLED:
      return state.setIn(["persons", payload.id], payload);
    // return state.update("persons", persons => persons.push(payload));

    case GET_PERSONS_FULFILLED:
      return state.set("persons", Map(payload.map(p => [p.id, p])));

    default:
      return state;
  }
}
