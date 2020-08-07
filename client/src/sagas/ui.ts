import { put, takeEvery, all } from "redux-saga/effects";
import { AnyAction } from "redux";
import { INCREMENT_LOADING, DECREMENT_LOADING } from "../ducks/ui";

export function* watchLoadingOperations() {
  console.log("hellurei");

  yield all([
    takeEvery(
      (a: AnyAction) => a.type.endsWith("_PENDING"),
      function* () {
        yield put({
          type: INCREMENT_LOADING
        });
      }
    ),
    takeEvery(
      (a: AnyAction) =>
        a.type.endsWith("_REJECTED") || a.type.endsWith("_FULFILLED"),
      function* () {
        yield put({
          type: DECREMENT_LOADING
        });
      }
    )
  ]);
}
