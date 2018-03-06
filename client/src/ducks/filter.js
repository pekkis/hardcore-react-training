import { Map, Set, Range } from "immutable";

const defaultState = Map({
  filters: Map({
    gender: Set.of("f"),
    ageMin: 16,
    ageMax: 30
  })
});

export const setFilter = (key, value) => {
  return {
    type: "SET_FILTER",
    payload: {
      key,
      value
    }
  };
};

export default function filterReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case "SET_FILTER":
      return state.setIn(["filters", payload.key], payload.value);

    default:
      return state;
  }
}
