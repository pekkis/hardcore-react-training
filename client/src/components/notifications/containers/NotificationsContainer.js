import { connect } from "react-redux";
import Notifications from "../Notifications";
import { dismissNotification } from "../../../ducks/notification";

export default connect(
  state => ({
    notifications: state.notification.get("notifications")
  }),
  { dismissNotification }
)(Notifications);
