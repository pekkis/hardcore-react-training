import { call, put, putResolve } from "redux-saga/effects";
import authService from "../services/auth";

export function* login(email, password) {
  try {
    const [token, user] = yield call(authService.login, email, password);
    yield putResolve({
      type: "LOGIN_SUCCESS",
      payload: {
        token,
        user
      }
    });

    yield call([window.localStorage, "setItem"], "token", token);
  } catch (e) {
    yield putResolve({
      type: "LOGIN_FAILURE",
      error: true,
      payload: e
    });
  }
}
