import { Map } from "immutable";

const defaultState = Map({
  initialized: false,
  token: undefined,
  user: undefined
});

export const login = () => {
  return {
    type: "LOGIN",
    payload: {
      email: "gaylord.lohiposki@dr-kobros.com",
      password: "gaylordpassu"
    }
  };
};

export default function authReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN_SUCCESS":
      return state.merge({
        initialized: true,
        token: payload.token,
        user: payload.user
      });

    default:
      return state;
  }
}
