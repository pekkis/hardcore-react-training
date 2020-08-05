export { default as person } from "./person";
import { PersonState } from "./person";

export interface AppState {
  person: PersonState;
}
