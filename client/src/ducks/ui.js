import { Map } from "immutable";

const defaultState = Map({
  requestCount: 0
});

export default function uiReducer(state = defaultState, action) {
  const { type } = action;

  switch (true) {
    case type.endsWith("_PENDING"):
      return state.update("requestCount", r => r + 1);
    case type.endsWith("_REJECTED"):
    case type.endsWith("_FULFILLED"):
      return state.update("requestCount", r => r - 1);
    default:
      return state;
  }
}
