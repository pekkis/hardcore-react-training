import { put, call } from "redux-saga/effects";
import personService from "../services/person";
import {
  GET_PERSONS_FULFILLED,
  GET_PERSONS_REJECTED,
  GET_PERSONS_PENDING,
  HIRE_PERSON_PENDING,
  HIRE_PERSON_FULFILLED,
  HIRE_PERSON_REJECTED,
  HirePersonFulfilledAction,
  FIRE_PERSON_PENDING,
  FIRE_PERSON_FULFILLED,
  FirePersonFulfilledAction,
  FIRE_PERSON_REJECTED
} from "../ducks/person";
import { PersonInterface } from "../types";

export function* getPersons(): Generator {
  yield put({
    type: GET_PERSONS_PENDING
  });

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

export function* hirePerson(person: PersonInterface): Generator<any, any, any> {
  yield put({
    type: HIRE_PERSON_PENDING
  });

  try {
    const hiredPerson: PersonInterface = yield call(
      personService.hirePerson,
      person
    );
    yield put<HirePersonFulfilledAction>({
      type: HIRE_PERSON_FULFILLED,
      payload: hiredPerson
    });
  } catch (e) {
    yield put({
      type: HIRE_PERSON_REJECTED,
      payload: e,
      error: true
    });
  }
}

export function* firePerson(id: string) {
  yield put({
    type: FIRE_PERSON_PENDING,
    payload: id
  });

  try {
    yield call(personService.firePerson, id);
    yield put<FirePersonFulfilledAction>({
      type: FIRE_PERSON_FULFILLED,
      payload: id
    });
  } catch (e) {
    yield put({
      type: FIRE_PERSON_REJECTED,
      payload: e,
      error: true
    });
  }
}
