import {
  all,
  call,
  take,
  fork,
  takeEvery,
  takeLeading,
  takeLatest,
  select,
  cancel
} from "redux-saga/effects";
import { getPersons, hirePerson, firePerson } from "./person";
import { addNotification } from "./notification";
import { login } from "./auth";

export default function* rootSagas() {
  // console.log("hellurei");
  // yield getPersons();

  yield all([
    takeLatest("GET_PERSONS", getPersons),
    call(addNotification, "Tervetuloa, mahtava käyttäjä!")
  ]);

  do {
    const action = yield take("LOGIN");
    const task = yield fork(
      login,
      action.payload.email,
      action.payload.password
    );

    yield take("LOGIN_SUCCESS");

    const user = yield select(state => state.auth.get("user"));

    const loggedInTask = yield fork(loggedInSagas);

    yield take("LOGOUT");

    yield cancel(loggedInTask);

    // clean up
  } while (true);
}

function* loggedInSagas() {
  yield all([
    takeEvery("HIRE_PERSON", watchHirePerson),
    takeEvery("FIRE_PERSON", watchFirePerson)
  ]);
}

function* watchHirePerson(action) {
  yield call(hirePerson, action.payload);
}

function* watchFirePerson(action) {
  yield call(firePerson, action.payload);
}
