import { PersonState } from "./person";
import { UIState } from "./ui";

export { default as person } from "./person";
export { default as ui } from "./ui";

export interface AppState {
  person: PersonState;
  ui: UIState;
}
