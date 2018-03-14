import { Map, List, Set } from "immutable";

const defaultState = Map({
  loading: 0,
  firing: Set()
});

export default function uiReducer(state = defaultState, action) {
  const { type, payload } = action;

  if (type.endsWith("_PENDING")) {
    state = state.update("loading", l => l + 1);
  }

  if (type.endsWith("_FULFILLED")) {
    state = state.update("loading", l => l - 1);
  }

  if (type.endsWith("_REJECTED")) {
    state = state.update("loading", l => l - 1);
  }

  switch (type) {
    case "FIRE_PERSON_PENDING":
      return state.update("firing", f => f.add(payload));

    case "FIRE_PERSON_FULFILLED":
      return state.update("firing", f => f.remove(payload));

    default:
      return state;
  }
}
