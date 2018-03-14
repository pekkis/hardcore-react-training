import { call, put, takeEvery } from "redux-saga/effects";
import personService from "../services/person";

function* getPersons(action) {
  try {
    const persons = yield call(personService.getPersons);
    yield put({ type: "GET_PERSONS_FULFILLED", payload: persons });
  } catch (e) {
    yield put({ type: "GET_PERSONS_REJECTED" });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery("GET_PERSONS", getPersons);
}

export default mySaga;
