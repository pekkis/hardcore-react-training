import { connect } from "react-redux";
import App from "../App";
import { getPersons, hirePerson, firePerson } from "../../ducks/person";
import { withRouter } from "react-router";
import { compose } from "recompose";

export default compose(
  withRouter,
  connect(
    state => ({
      persons: state.person.get("persons"),
      loading: state.ui.get("loading") > 0 ? true : false
    }),
    {
      getPersons,
      hirePerson,
      firePerson
    }
  )
)(App);
