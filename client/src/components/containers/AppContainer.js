import App from "../App";
import { connect } from "react-redux";
import { hirePerson, firePerson, getPersons } from "ducks/person";
import { setFilter } from "ducks/filter";
import { withRouter } from "react-router";
import { compose } from "recompose";

export default compose(
  withRouter,
  connect(
    state => ({
      persons: state.person.get("persons"),
      loading: state.generic.get("loading"),
      firing: state.person.get("firing"),
      filters: state.filter.get("filters")
    }),
    {
      hirePerson,
      firePerson,
      getPersons,
      setFilter
    }
  )
)(App);
