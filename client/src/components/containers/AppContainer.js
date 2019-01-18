import { connect } from "react-redux";
import App from "../App";
import { getPersons } from "../../ducks/person";
import { withRouter } from "react-router";

/*
{
  person: Map({
    persons: List()
  }),
  ui: Map({
    loading: 0-n
  })
}
*/

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
