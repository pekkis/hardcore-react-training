import { Map } from "immutable";

const defaultState = Map({
  loading: 0
});

export default function uiReducer(state = defaultState, action) {
  const { type } = action;

  switch (true) {
    case type.endsWith("_PENDING"):
      return state.update("loading", loading => loading + 1);

    case type.endsWith("_REJECTED"):
    case type.endsWith("_FULFILLED"):
      return state.update("loading", loading => loading - 1);

    default:
      return state;
  }
}
