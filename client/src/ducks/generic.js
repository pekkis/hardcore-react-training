import { Map } from "immutable";

const defaultState = Map({
  genericOption: false,
});

export function setGenericOption(value) {
  return {
    type: "GENERIC_SET_OPTION",
    payload: value
  };
}

export default function(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case "GENERIC_SET_OPTION":
      return state.set("genericOption", payload);

    default:
      return state;
  }
}
