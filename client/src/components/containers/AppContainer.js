import App from "../App";
import { connect } from "react-redux";
import { getPersons, firePerson } from "../../ducks/person";
import { withRouter } from "react-router";

export default withRouter(
  connect(
    state => ({
      persons: state.person.get("persons"),
      loading: state.person.get("loading")
    }),
    {
      getPersons,
      firePerson
    }
  )(App)
);
