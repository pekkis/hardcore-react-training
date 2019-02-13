import App from "../App";
import { connect } from "react-redux";
import { getPersons } from "../../ducks/person";
import { withRouter } from "react-router";

export default withRouter(
  connect(
    state => ({
      loading: state.ui.get("loading") > 0
    }),
    {
      getPersons
    }
  )(App)
);
