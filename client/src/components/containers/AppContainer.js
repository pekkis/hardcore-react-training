import App from "../App";
import { connect } from "react-redux";
import { hirePerson, firePerson, getPersons } from "../../ducks/person";
import { withRouter } from "react-router";

import { compose } from "recompose";

export default compose(
  withRouter,
  connect(
    state => ({
      persons: state.person.get("persons"),
      loading: state.ui.get("loading")
    }),
    {
      hirePerson,
      firePerson,
      getPersons
    }
  )
)(App);
