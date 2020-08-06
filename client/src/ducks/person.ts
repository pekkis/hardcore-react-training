import { PersonInterface } from "../types";

export interface PersonState {
  persons: PersonInterface[];
}

const defaultState: PersonState = {
  persons: []
};

export default function personReducer(
  state = defaultState,
  action: unknown
): PersonState {
  console.log(action, "hellurei");
  return state;
}
