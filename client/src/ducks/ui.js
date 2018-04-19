import { Map } from "immutable";

const defaultState = Map({
  error: undefined,
  loading: 0
});

const handleAsync = (state, type) => {
  if (type.endsWith("_PENDING")) {
    return state.update("loading", l => l + 1);
  }

  if (type.endsWith("_REJECTED") || type.endsWith("_FULFILLED")) {
    return state.update("loading", l => l - 1);
  }

  return state;
};

export default function uiReducer(state = defaultState, action) {
  const { type, payload } = action;

  state = handleAsync(state, type);

  switch (type) {
    default:
      return state;
  }
}
