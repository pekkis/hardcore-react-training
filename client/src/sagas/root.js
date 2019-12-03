import {
  call,
  put,
  takeEvery,
  takeLeading,
  all,
  delay,
  fork,
  take,
  spawn,
  race,
  cancel,
  select
} from "redux-saga/effects";
import personService from "../services/person";
import {
  GET_PERSONS_FULFILLED,
  GET_PERSONS_REJECTED,
  GET_PERSONS,
  HIRE_PERSON_FULFILLED,
  HIRE_PERSON_REJECTED,
  FIRE_PERSON_FULFILLED,
  FIRE_PERSON_REJECTED,
  HIRE_PERSON,
  FIRE_PERSON
} from "../ducks/person";
import { INCREMENT_LOADING_COUNT, DECREMENT_LOADING_COUNT } from "../ducks/ui";
import { ADD_NOTIFICATION, DELETE_NOTIFICATION } from "../ducks/notification";
import uuid from "uuid";
import { whileStatement } from "@babel/types";
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../ducks/auth";
import auth from "../services/auth";

function* getPersons() {
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

function* hirePerson(person) {
  const token = yield select(state => state.auth.get("token"));
  try {
    const hiredPerson = yield call(personService.hirePerson, token, person);
    yield put({
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

function* firePerson(id) {
  const token = yield select(state => state.auth.get("token"));
  try {
    const fired = yield call(personService.firePerson, token, id);
    yield put({
      type: FIRE_PERSON_FULFILLED,
      payload: fired
    });
  } catch (e) {
    yield put({
      type: FIRE_PERSON_REJECTED,
      payload: e,
      error: true
    });
  }
}

function* addNotification(message) {
  const id = uuid();

  yield put({
    type: ADD_NOTIFICATION,
    payload: {
      id,
      message
    }
  });

  yield delay(5000);

  yield put({
    type: DELETE_NOTIFICATION,
    payload: id
  });
}

function* congratulator() {
  do {
    for (let x = 1; x <= 5; x = x + 1) {
      yield take(FIRE_PERSON_FULFILLED);
    }
    yield fork(addNotification, "Congratulations for your hard work!");
  } while (true);
}

function* login(email, password) {
  try {
    const [token, user] = yield call(auth.login, email, password);
    yield put({
      type: LOGIN_SUCCESS,
      payload: {
        token,
        user
      }
    });
  } catch (e) {
    yield put({
      type: LOGIN_FAILURE
    });
  }
}

function* loggedIn() {
  yield all([
    takeEvery(HIRE_PERSON, function*(a) {
      yield* hirePerson(a.payload);
    }),
    takeEvery(FIRE_PERSON, function*(a) {
      yield* firePerson(a.payload);
    }),
    takeEvery([GET_PERSONS, HIRE_PERSON, FIRE_PERSON], function*() {
      yield put({
        type: INCREMENT_LOADING_COUNT
      });
    }),
    takeEvery(
      a => a.type.endsWith("_REJECTED") || a.type.endsWith("_FULFILLED"),
      function*() {
        yield put({
          type: DECREMENT_LOADING_COUNT
        });
      }
    )
  ]);
}

function* mainLoop() {
  do {
    const a = yield take(LOGIN);
    yield fork(login, a.payload.email, a.payload.password);

    const { success } = yield race({
      success: take(LOGIN_SUCCESS),
      failure: take(LOGIN_FAILURE)
    });

    if (success) {
      const tasks = yield fork(loggedIn);
      yield take(LOGOUT);
      yield cancel(tasks);
    }
  } while (true);
}

export default function* rootSaga() {
  yield (addNotification, "Welcome to the jungle");

  yield all([
    spawn(congratulator),
    takeLeading(GET_PERSONS, getPersons),
    spawn(mainLoop)
  ]);
}
