import produce from "immer";
import { PersonInterface } from "../types";
import {
  over,
  lensProp,
  append,
  indexBy,
  dissoc,
  assoc,
  assocPath
} from "ramda";

export const GET_PERSONS = "GET_PERSONS";
export const GET_PERSONS_PENDING = "GET_PERSONS_PENDING";
export const GET_PERSONS_REJECTED = "GET_PERSONS_REJECTED";
export const GET_PERSONS_FULFILLED = "GET_PERSONS_FULFILLED";

export const HIRE_PERSON = "HIRE_PERSON";
export const HIRE_PERSON_PENDING = "HIRE_PERSON_PENDING";
export const HIRE_PERSON_REJECTED = "HIRE_PERSON_REJECTED";
export const HIRE_PERSON_FULFILLED = "HIRE_PERSON_FULFILLED";

export const FIRE_PERSON = "FIRE_PERSON";
export const FIRE_PERSON_PENDING = "FIRE_PERSON_PENDING";
export const FIRE_PERSON_REJECTED = "FIRE_PERSON_REJECTED";
export const FIRE_PERSON_FULFILLED = "FIRE_PERSON_FULFILLED";

export interface GetPersonsAction {
  type: typeof GET_PERSONS;
}

export interface GetPersonsFulfilledAction {
  type: typeof GET_PERSONS_FULFILLED;
  payload: PersonInterface[];
}

export interface HirePersonAction {
  type: typeof HIRE_PERSON;
  payload: PersonInterface;
}

export interface HirePersonPendingAction {
  type: typeof HIRE_PERSON_PENDING;
  payload: PersonInterface;
}

export interface HirePersonFulfilledAction {
  type: typeof HIRE_PERSON_FULFILLED;
  payload: PersonInterface;
}

export interface FirePersonAction {
  type: typeof FIRE_PERSON;
  payload: string;
}

export interface FirePersonPendingAction {
  type: typeof FIRE_PERSON_PENDING;
  payload: string;
}

export interface FirePersonFulfilledAction {
  type: typeof FIRE_PERSON_FULFILLED;
  payload: string;
}

type Actions =
  | GetPersonsAction
  | FirePersonAction
  | HirePersonAction
  | GetPersonsFulfilledAction
  | HirePersonFulfilledAction
  | FirePersonFulfilledAction
  | FirePersonPendingAction;

export interface PersonState {
  persons: { [key: string]: PersonInterface };
}

const defaultState: PersonState = {
  persons: {}
};

export default function personReducer(
  state = defaultState,
  action: Actions
): PersonState {
  switch (action.type) {
    case GET_PERSONS_FULFILLED:
      return produce(state, (draft) => {
        draft.persons = indexBy((p) => p.id, action.payload);
      });

    case FIRE_PERSON_PENDING:
      return assocPath(
        ["persons", action.payload, "isBeingFired"],
        true,
        state
      );

    case FIRE_PERSON_FULFILLED:
      return produce(state, (draft) => {
        draft.persons = dissoc(action.payload, draft.persons);
      });

    case HIRE_PERSON_FULFILLED:
      return over(lensProp("persons"), assoc(action.payload.id))(state);
    default:
      return state;
  }
}
