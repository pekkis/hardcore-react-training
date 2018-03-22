import { connect } from "react-redux";
import App from "../App";
import { getPersons, hirePerson, firePerson } from "../../ducks/person";
import { withRouter } from "react-router";

export default withRouter(
  connect(
    state => ({
      persons: state.person.get("persons"),
      loading: state.ui.get("loading")
    }),
    {
      getPersons,
      hirePerson,
      firePerson
    }
  )(App)
);
