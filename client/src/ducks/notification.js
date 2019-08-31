import { OrderedMap, Map } from "immutable";

const defaultState = Map({
  notifications: OrderedMap()
});

export const dismissNotification = id => {
  return {
    type: "NOTIFICATION_DISMISS",
    payload: id
  };
};

export default function notificationReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case "NOTIFICATION_ADD":
      return state.update("notifications", notifications =>
        notifications.set(payload.id, payload).takeLast(3)
      );

    case "NOTIFICATION_DISMISS":
      return state.deleteIn(["notifications", payload]);

    default:
      return state;
  }
}
