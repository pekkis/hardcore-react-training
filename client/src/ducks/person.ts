import produce from "immer";
import { PersonInterface } from "../types";
import { over, lensProp, append } from "ramda";
import { Dispatch } from "redux";
import personService from "../services/person";

export const GET_PERSONS = "GET_PERSONS";
export const GET_PERSONS_PENDING = "GET_PERSONS_PENDING";
export const GET_PERSONS_REJECTED = "GET_PERSONS_REJECTED";
export const GET_PERSONS_FULFILLED = "GET_PERSONS_FULFILLED";

export const HIRE_PERSON = "HIRE_PERSON";
export const FIRE_PERSON = "FIRE_PERSON";

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

export interface FirePersonAction {
  type: typeof FIRE_PERSON;
  payload: string;
}

type Actions =
  | GetPersonsAction
  | FirePersonAction
  | HirePersonAction
  | GetPersonsFulfilledAction;

export interface PersonState {
  persons: PersonInterface[];
}

const defaultState: PersonState = {
  persons: []
};

export function getPersons(): (dispatch: Dispatch) => void {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: GET_PERSONS_PENDING
    });

    try {
      const persons = await personService.getPersons();
      dispatch({
        type: GET_PERSONS_FULFILLED,
        payload: persons
      });
    } catch (e) {
      dispatch({
        type: GET_PERSONS_REJECTED,
        payload: e,
        error: true
      });
    }
  };
}

export default function personReducer(
  state = defaultState,
  action: Actions
): PersonState {
  switch (action.type) {
    case GET_PERSONS_FULFILLED:
      return produce(state, (draft) => {
        draft.persons = action.payload;
      });
    case FIRE_PERSON:
      return produce(state, (draft) => {
        draft.persons = draft.persons.filter((p) => p.id !== action.payload);
      });

    case HIRE_PERSON:
      return over(lensProp("persons"), append(action.payload))(state);
    default:
      return state;
  }
}
