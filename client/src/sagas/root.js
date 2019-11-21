import {
  all,
  takeEvery,
  takeLeading,
  takeLatest,
  call,
  put
} from "redux-saga/effects";
import personService from "../services/person";
import {
  GET_PERSONS_FULFILLED,
  GET_PERSONS,
  HIRE_PERSON,
  FIRE_PERSON,
  HIRE_PERSON_FULFILLED,
  FIRE_PERSON_FULFILLED,
  INCREMENT_LOADING,
  DECREMENT_LOADING
} from "../ducks/person";

function* getPersons() {
  const persons = yield call(personService.getPersons);
  yield put({
    type: GET_PERSONS_FULFILLED,
    payload: persons
  });
}

function* hirePerson(action) {
  const hired = yield call(personService.hirePerson, action.payload);
  yield put({
    type: HIRE_PERSON_FULFILLED,
    payload: hired
  });
}

function* firePerson(action) {
  const fired = yield call(personService.firePerson, action.payload);
  yield put({
    type: FIRE_PERSON_FULFILLED,
    payload: fired
  });
}

export default function* rootSaga() {
  yield all([
    takeLeading(GET_PERSONS, getPersons),
    takeEvery(HIRE_PERSON, hirePerson),
    takeEvery(FIRE_PERSON, firePerson),
    takeEvery([GET_PERSONS, HIRE_PERSON, FIRE_PERSON], function*() {
      yield put({
        type: INCREMENT_LOADING
      });
    }),
    takeEvery(
      [GET_PERSONS_FULFILLED, HIRE_PERSON_FULFILLED, FIRE_PERSON_FULFILLED],
      function*() {
        yield put({
          type: DECREMENT_LOADING
        });
      }
    )
  ]);
}
