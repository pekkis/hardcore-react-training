import { connect } from "react-redux";
import App from "../App";
import { firePerson, hirePerson } from "../../ducks/person";
import { withRouter } from "react-router";
import { compose } from "recompose";

export default compose(
  withRouter,
  connect(
    state => ({
      persons: state.person.get("persons"),
      loading: state.ui.get("loading"),
      firing: state.ui.get("firing")
    }),
    {
      firePerson,
      hirePerson
    }
  )
)(App);
