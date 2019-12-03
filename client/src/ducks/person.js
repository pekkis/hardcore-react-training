import { Map } from "immutable";

const defaultState = Map();

/*
Map({
  tussi: "hovi",
  kaksi: "jotain"
})

Map([
  [key, value],
  [key, value],
  ...
])

*/

export const HIRE_PERSON = "HIRE_PERSON";
export const HIRE_PERSON_FULFILLED = "HIRE_PERSON_FULFILLED";
export const HIRE_PERSON_REJECTED = "HIRE_PERSON_REJECTED";

export const FIRE_PERSON = "FIRE_PERSON";
export const FIRE_PERSON_FULFILLED = "FIRE_PERSON_FULFILLED";
export const FIRE_PERSON_REJECTED = "FIRE_PERSON_REJECTED";

export const GET_PERSONS = "GET_PERSONS";
export const GET_PERSONS_FULFILLED = "GET_PERSONS_FULFILLED";
export const GET_PERSONS_REJECTED = "GET_PERSONS_REJECTED";

export default function personReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case FIRE_PERSON:
      return state.update(payload, p => {
        return {
          ...p,
          isBeingFired: true
        };
      });

    case HIRE_PERSON_FULFILLED:
      return state.set(payload.id, payload);

    case FIRE_PERSON_FULFILLED:
      return state.delete(payload);

    case GET_PERSONS_FULFILLED:
      return Map(payload.map(p => [p.id, p]));

    default:
      return state;
  }
}
