export interface Person {
  id: string;
}

export interface PersonState {
  persons: Person[];
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
