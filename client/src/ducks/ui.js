import { Map } from "immutable";

const defaultState = Map({
  loading: 0
});

export const INCREMENT_LOADING = "INCREMENT_LOADING";
export const DECREMENT_LOADING = "DECREMENT_LOADING";

export default function uiReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT_LOADING:
      return state.update("loading", l => l + 1);
    case DECREMENT_LOADING:
      return state.update("loading", l => l - 1);

    default:
      return state;
  }
}
