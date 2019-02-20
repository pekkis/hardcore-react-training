import { call, apply, put, putResolve, take } from "redux-saga/effects";
import authService from "../services/auth";
import { LOGIN_SUCCESS, LOGIN_FAILURE, INITIALIZE } from "../ducks/auth";
import { addNotification } from "./notification";

export function* initialize() {
  const token = yield apply(window.localStorage, window.localStorage.getItem, [
    "token"
  ]);

  if (token) {
    yield put({
      type: LOGIN_SUCCESS,
      payload: { token }
    });
  } else {
    yield put({ type: INITIALIZE });
  }

  return token;
}

export function* watchLogin() {
  try {
    const action = yield take("LOGIN");

    const [token, user] = yield call(
      authService.login,
      action.payload.email,
      action.payload.password
    );
    yield putResolve({
      type: LOGIN_SUCCESS,
      payload: {
        token,
        user
      }
    });

    yield call([window.localStorage, "setItem"], "token", token);
  } catch (e) {
    yield call(addNotification, "Oh noes, login failed!");

    yield put({
      type: LOGIN_FAILURE,
      error: true,
      payload: e
    });
  }
}
