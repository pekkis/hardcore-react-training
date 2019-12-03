import { List } from "immutable";
import React, { FunctionComponent } from "react";
import Notification, { NotificationType } from "./Notification";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_NOTIFICATION } from "../ducks/notification";

type Props = {};

const Notifications: FunctionComponent<Props> = props => {
  const dispatch = useDispatch();
  const notifications = useSelector(state =>
    state.notification.get("notifications")
  );

  const discard = id => {
    dispatch({
      type: DELETE_NOTIFICATION,
      payload: id
    });
  };

  return (
    <div
      css={{
        position: "fixed",
        bottom: "0",
        left: "0",
        width: "100%"
      }}
    >
      {notifications.map(n => (
        <Notification discard={discard} key={n.id} notification={n} />
      ))}
    </div>
  );
};

export default Notifications;
