import {
  takeEvery,
  takeLatest,
  takeLeading,
  call,
  put,
  all,
  delay
} from "redux-saga/effects";
import {
  GET_PERSONS,
  GET_PERSONS_FULFILLED,
  GET_PERSONS_REJECTED,
  FIRE_PERSON_FULFILLED,
  FIRE_PERSON_REJECTED,
  HIRE_PERSON_FULFILLED,
  HIRE_PERSON_REJECTED,
  FIRE_PERSON,
  HIRE_PERSON,
  GET_PERSONS_PENDING,
  FIRE_PERSON_PENDING,
  HIRE_PERSON_PENDING
} from "../ducks/person";
import personService from "../services/person";

function* getPersons() {
  try {
    yield put({ type: GET_PERSONS_PENDING });
    const persons = yield call(personService.getPersons);
    yield delay(500);
    yield put({ type: GET_PERSONS_FULFILLED, payload: persons });
  } catch (e) {
    yield put({ type: GET_PERSONS_REJECTED, payload: e, error: true });
  }
}

function* firePerson(id) {
  try {
    yield put({ type: FIRE_PERSON_PENDING, payload: id });
    const person = yield call(personService.firePerson, id);
    yield put({ type: FIRE_PERSON_FULFILLED, payload: person.id });
  } catch (e) {
    console.log(e);
    yield put({ type: FIRE_PERSON_REJECTED, payload: e, error: true });
  }
}

function* hirePerson(person) {
  try {
    yield put({ type: HIRE_PERSON_PENDING, payload: person });
    const hiredPerson = yield call(personService.hirePerson, person);
    yield put({ type: HIRE_PERSON_FULFILLED, payload: hiredPerson });
  } catch (e) {
    yield put({ type: HIRE_PERSON_REJECTED, payload: e, error: true });
  }
}

export default function* personSagas() {
  yield all([
    takeLeading(GET_PERSONS, function*() {
      yield call(getPersons);
    }),
    takeEvery(FIRE_PERSON, function*(action) {
      yield call(firePerson, action.payload);
    }),
    takeEvery(HIRE_PERSON, function*(action) {
      yield call(hirePerson, action.payload);
    })
  ]);
}
