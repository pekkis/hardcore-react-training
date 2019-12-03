import { Map, List } from "immutable";

export const ADD_NOTIFICATION = "ADD_NOTIFICATION";
export const DELETE_NOTIFICATION = "DELETE_NOTIFICATION";

const defaultState = Map({
  notifications: List.of()
});

export default function notificationReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_NOTIFICATION:
      return state.update("notifications", n => n.push(payload));

    case DELETE_NOTIFICATION:
      return state.update("notifications", nots => {
        return nots.filter(n => n.id !== payload);
      });
    default:
      return state;
  }
}
