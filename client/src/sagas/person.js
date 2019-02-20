import personService from "../services/person";
import { select, put, call, cancelled } from "redux-saga/effects";

function* getToken() {
  return yield select(state => state.auth.get("token"));
}

export function* hirePerson(person) {
  yield put({
    type: "HIRE_PERSON_PENDING",
    payload: person
  });

  const token = yield call(getToken);

  const ret = yield call(personService.hirePerson, token, person);
  yield put({
    type: "HIRE_PERSON_FULFILLED",
    payload: ret
  });
}

export function* firePerson(id) {
  yield put({
    type: "FIRE_PERSON_PENDING",
    payload: id
  });
  const token = yield call(getToken);

  const ret = yield call(personService.firePerson, token, id);
  yield put({
    type: "FIRE_PERSON_FULFILLED",
    payload: ret
  });
}

export function* getPersons() {
  yield put({
    type: "GET_PERSONS_PENDING"
  });

  try {
    const persons = yield call(personService.getPersons);
    yield put({
      type: "GET_PERSONS_FULFILLED",
      payload: persons
    });
  } catch (e) {
    yield put({
      type: "GET_PERSONS_REJECTED",
      payload: e,
      error: true
    });
  } finally {
    if (yield cancelled()) {
      console.log("OH NOES CANCELLADO!");
      yield put({
        type: "GET_PERSONS_REJECTED"
      });
    }
  }
}
