import { Map } from "immutable";

const defaultState = Map({
  initialized: false,
  token: undefined
});

export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";
export const INITIALIZE = "INITIALIZE";

export const login = (email, password) => {
  return {
    type: LOGIN,
    payload: {
      email,
      password
    }
  };
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};

export default function authReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case INITIALIZE:
      return state.merge({
        initialized: true
      });

    case LOGIN_SUCCESS:
      return state.merge({
        initialized: true,
        token: payload.token
      });
    case LOGOUT:
      return state.merge({
        token: undefined
      });

    default:
      return state;
  }
}
