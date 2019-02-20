import {
  all,
  call,
  take,
  fork,
  takeEvery,
  takeLeading,
  takeLatest,
  select,
  cancel,
  race,
  apply,
  putResolve
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

  let counter = 0;

  do {
    // const token = yield select(state => state.auth.get("token"));
    const token = yield apply(
      window.localStorage,
      window.localStorage.getItem,
      ["token"]
    );

    if (!token) {
      const action = yield take("LOGIN");
      const task = yield fork(
        login,
        action.payload.email,
        counter === 0 ? "naamaloso" : action.payload.password
      );
      const { success } = yield race({
        success: take("LOGIN_SUCCESS"),
        failure: take("LOGIN_FAILURE")
      });

      if (success) {
        yield call(loggedIn);
      }
      counter++;
    } else {
      yield putResolve({
        type: "LOGIN_SUCCESS",
        payload: {
          token
        }
      });

      yield call(loggedIn);
    }

    // clean up
  } while (true);
}

function* loggedIn() {
  const loggedInTask = yield fork(loggedInSagas);
  yield take("LOGOUT");
  yield cancel(loggedInTask);
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
