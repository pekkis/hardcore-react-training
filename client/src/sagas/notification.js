import { put, call, spawn } from "redux-saga/effects";
import delay from "@redux-saga/delay-p";
import uuid from "uuid";

export function* autoDismissal(id) {
  yield delay(7000);
  yield call(dismissNotification, id);
}

export function* addNotification(message, type = "info") {
  const id = uuid();

  yield put({
    type: "NOTIFICATION_ADD",
    payload: {
      id,
      message,
      type
    }
  });

  yield spawn(autoDismissal, id);
}

export function* dismissNotification(id) {
  yield put({
    type: "NOTIFICATION_DISMISS",
    payload: id
  });
}
