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
  putResolve,
  spawn
} from "redux-saga/effects";
import { getPersons, hirePerson, firePerson } from "./person";
import { addNotification } from "./notification";
import { watchLogin, initialize, logout } from "./auth";

export default function* rootSagas() {
  yield all([
    takeLatest("GET_PERSONS", getPersons),
    call(addNotification, "Welcome to Fraktio ERP 5000!")
  ]);

  yield spawn(initialize);

  do {
    const loginTask = yield fork(watchLogin);

    const { success } = yield race({
      success: take("LOGIN_SUCCESS"),
      failure: take("LOGIN_FAILURE")
    });

    yield cancel(loginTask);

    if (success) {
      const loggedInTask = yield fork(loggedInSagas);
      yield take("LOGOUT");
      yield cancel(loggedInTask);
    }
  } while (true);
}

function* loggedInSagas() {
  yield all([
    takeEvery("HIRE_PERSON", watchHirePerson),
    takeEvery("FIRE_PERSON", watchFirePerson),
    fork(watchEfficientFiring)
  ]);
}

function* watchEfficientFiring() {
  for (const x = 1; x <= 3; x++) {
    yield take("FIRE_PERSON_FULFILLED");
  }
  yield call(addNotification, "Excellent work! Keep on firing those people!");
}

function* watchHirePerson(action) {
  yield call(hirePerson, action.payload);
}

function* watchFirePerson(action) {
  yield call(firePerson, action.payload);
}
