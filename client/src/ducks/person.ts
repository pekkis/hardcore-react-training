import { PersonInterface } from "../types";

type PersonState = {
  persons: PersonInterface[];
};

type Action =
  | { type: "GET_PERSONS" }
  | { type: "GET_PERSONS_PENDING" }
  | { type: "GET_PERSONS_REJECTED" }
  | { type: "GET_PERSONS_FULFILLED"; payload: PersonInterface[] }
  | { type: "FIRE_PERSON"; payload: string }
  | { type: "FIRE_PERSON_PENDING"; payload: string }
  | { type: "FIRE_PERSON_REJECTED"; payload: string }
  | { type: "FIRE_PERSON_FULFILLED"; payload: PersonInterface }
  | {
      type: "HIRE_PERSON_PENDING";
      payload: Omit<PersonInterface, "id" | "age">;
    }
  | { type: "HIRE_PERSON_FULFILLED"; payload: PersonInterface };

export default function personReducer(state: PersonState, action: Action) {
  switch (action) {
    default:
      return state;
  }
}
