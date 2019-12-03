import { Map } from "immutable";

const defaultState = Map({
  loadingCount: 0
});

export const INCREMENT_LOADING_COUNT = "INCREMENT_LOADING_COUNT";
export const DECREMENT_LOADING_COUNT = "DECREMENT_LOADING_COUNT";

export default function uiReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT_LOADING_COUNT:
      return state.update("loadingCount", lc => lc + 1);

    case DECREMENT_LOADING_COUNT:
      return state.update("loadingCount", lc => lc - 1);

    default:
      return state;
  }
}
