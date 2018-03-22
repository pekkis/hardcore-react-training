import { Map } from "immutable";

const defaultState = Map({
  loading: 0
});

export default function uiReducer(state = defaultState, action) {
  const { type, payload } = action;

  if (type.endsWith("_PENDING")) {
    state = state.update("loading", l => l + 1);
  }

  if (type.endsWith("_REJECTED")) {
    state = state.update("loading", l => l - 1);
  }

  if (type.endsWith("_FULFILLED")) {
    state = state.update("loading", l => l - 1);
  }

  return state;

  switch (type) {
    default:
      return state;
  }
}
