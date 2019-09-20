import { all, fork } from "redux-saga/effects";
import personSagas from "./person";
import uiSagas from "./ui";

export default function* rootSaga() {
  yield all([fork(personSagas), uiSagas()]);
}
