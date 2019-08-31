import {
  put,
  call,
  takeLeading,
  takeEvery,
  all,
  take
} from "redux-saga/effects";
import personService from "../services/person";
import {
  GET_PERSONS,
  GET_PERSONS_PENDING,
  GET_PERSONS_REJECTED,
  GET_PERSONS_FULFILLED,
  FIRE_PERSON,
  FIRE_PERSON_PENDING,
  FIRE_PERSON_FULFILLED,
  FIRE_PERSON_REJECTED,
  HIRE_PERSON,
  HIRE_PERSON_REJECTED,
  HIRE_PERSON_FULFILLED,
  HIRE_PERSON_PENDING
} from "../ducks/person";
import { addNotification } from "./notification";

export function* getPersons() {
  yield put({ type: GET_PERSONS_PENDING });

  try {
    const persons = yield call(personService.getPersons);
    yield put({ type: GET_PERSONS_FULFILLED, payload: persons });
  } catch (e) {
    yield put({ type: GET_PERSONS_REJECTED });
  }
}

export function* firePerson(id) {
  yield put({ type: FIRE_PERSON_PENDING, payload: id });

  try {
    const firedPerson = yield call(personService.firePerson, id);
    yield put({ type: FIRE_PERSON_FULFILLED, payload: firedPerson });
  } catch (e) {
    yield put({ type: FIRE_PERSON_REJECTED });
  }
}

export function* hirePerson(person) {
  yield put({ type: HIRE_PERSON_PENDING });

  try {
    const hiredPerson = yield call(personService.hirePerson, person);
    yield put({ type: HIRE_PERSON_FULFILLED, payload: hiredPerson });
  } catch (e) {
    yield put({ type: HIRE_PERSON_REJECTED });
  }
}

export function* congratulateForFirings() {
  do {
    for (let x = 1; x <= 5; x = x + 1) {
      yield take(FIRE_PERSON_FULFILLED);
    }

    yield call(
      addNotification,
      "Excellent job, sir! Keep on firing to get moar achievements!"
    );
  } while (true);
}

export function* loggedInActions() {
  yield all([
    takeEvery(FIRE_PERSON, function*(action) {
      yield call(firePerson, action.payload);
    }),
    takeEvery(HIRE_PERSON, function*(action) {
      yield call(hirePerson, action.payload);
    })
  ]);
}

export default function* personSagas() {
  yield all([
    takeLeading(GET_PERSONS, function*() {
      yield call(getPersons);
    }),
    loggedInActions(),
    congratulateForFirings()
  ]);
}
