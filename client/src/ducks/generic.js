import { Map } from "immutable";

const defaultState = Map({
  loading: 0
});

export default function genericReducer(state = defaultState, action) {
  const { type } = action;

  if (type.endsWith("_PENDING")) {
    state = state.update("loading", loading => loading + 1);
  }

  if (type.endsWith("_FULFILLED") || type.endsWith("_REJECTED")) {
    state = state.update("loading", loading => loading - 1);
  }

  switch (type) {
    default:
      return state;
  }
}
