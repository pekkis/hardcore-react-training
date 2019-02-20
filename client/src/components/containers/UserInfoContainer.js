import { connect } from "react-redux";
import UserInfo from "../UserInfo";
import { login, logout } from "../../ducks/auth";

export default connect(
  state => ({
    initialized: state.auth.get("initialized"),
    token: state.auth.get("token")
  }),
  {
    login,
    logout
  }
)(UserInfo);
