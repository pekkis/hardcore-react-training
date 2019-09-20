import { takeEvery, put, all } from "redux-saga/effects";
import { INCREMENT_LOADING, DECREMENT_LOADING } from "../ducks/ui";

export default function* uiSagas() {
  yield all([
    takeEvery(action => action.type.endsWith("_PENDING"), function*() {
      yield put({ type: INCREMENT_LOADING });
    }),
    takeEvery(
      action =>
        action.type.endsWith("_FULFILLED") || action.type.endsWith("_REJECTED"),
      function*() {
        yield put({ type: DECREMENT_LOADING });
      }
    )
  ]);
}
