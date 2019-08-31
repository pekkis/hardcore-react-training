import React from "react";
import styled from "styled-components";
import Notification from "./Notification";

/*
The old HOC way of connecting here

import { connect } from "react-redux";
import Notifications from "../Notifications";
import { dismissNotification } from "../../../ducks/notification";

export default connect(
  state => ({
    notifications: state.notification.get("notifications")
  }),
  { dismissNotification }
)(Notifications);
*/

const Notifications = props => {
  const { className, notifications, dismissNotification } = props;

  return (
    <div className={className}>
      {notifications
        .map(n => (
          <Notification
            key={n.id}
            dismiss={dismissNotification}
            notification={n}
          />
        ))
        .toList()
        .reverse()}
    </div>
  );
};

export default styled(Notifications)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;
