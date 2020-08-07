import { put, call } from "redux-saga/effects";
import personService from "../services/person";
import { GET_PERSONS_FULFILLED, GET_PERSONS_REJECTED } from "../ducks/person";

export function* getPersons() {
  try {
    const persons = yield call(personService.getPersons);
    yield put({
      type: GET_PERSONS_FULFILLED,
      payload: persons
    });
  } catch (e) {
    yield put({
      type: GET_PERSONS_REJECTED,
      payload: e,
      error: true
    });
  }
}
