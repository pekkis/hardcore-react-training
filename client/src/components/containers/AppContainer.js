import { connect } from "react-redux";
import App from "../App";
import { getPersons } from "../../ducks/person";
import { withRouter } from "react-router";
import { compose } from "redux";

/*
{
  person: Map({ persons: List() }),
  ui: Map({ isLoading: boolean }),
}
*/

export default compose(
  withRouter,
  connect(
    state => ({
      isLoading: state.ui.get("requestCount") > 0
    }),
    {
      getPersons
    }
  )
)(App);
