import React, { FunctionComponent } from "react";

export type NotificationType = {
  id: string;
  message: string;
};

type Props = {
  notification: NotificationType;
  discard: (id: string) => void;
};

const Notification: FunctionComponent<Props> = props => {
  const { notification, discard } = props;

  return (
    <div
      onClick={() => discard(notification.id)}
      css={{
        backgroundColor: "rgb(0, 0, 0)",
        color: "rgb(255, 0, 0)",
        padding: "1em"
      }}
    >
      {notification.message}
    </div>
  );
};

export default Notification;
