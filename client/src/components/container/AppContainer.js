import App from "../App";
import { connect } from "react-redux";
import { fetchPersons } from "../../ducks/generic";
import { withRouter } from "react-router";

export default withRouter(
  connect(
    state => ({
      loading: state.generic.get("loading"),
      persons: state.generic.get("persons")
    }),
    {
      fetchPersons
    }
  )(App)
);
