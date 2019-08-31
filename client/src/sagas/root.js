import { all, put, fork } from "redux-saga/effects";

import { GET_PERSONS } from "../ducks/person";

import personSagas from "./person";
import uiSagas from "./ui";

export default function* rootSaga() {
  yield all([fork(personSagas), fork(uiSagas)]);

  /*
  If we always do something in the beginning, I'd maybe put it
  here instead of the useEffect in root component
  */
  yield put({ type: GET_PERSONS });
}
