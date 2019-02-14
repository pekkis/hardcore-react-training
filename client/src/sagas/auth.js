import { call, put, putResolve } from "redux-saga/effects";
import authService from "../services/auth";

export function* login(email, password) {
  const [token, user] = yield call(authService.login, email, password);

  yield putResolve({
    type: "LOGIN_SUCCESS",
    payload: {
      token,
      user
    }
  });
}
