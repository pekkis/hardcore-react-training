import IndexPage from "../IndexPage";
import { connect } from "react-redux";
import { hirePerson, firePerson } from "../../ducks/person";
import { withRouter } from "react-router";

export default withRouter(
  connect(
    state => ({
      persons: state.person.get("persons")
    }),
    {
      hirePerson,
      firePerson
    }
  )(IndexPage)
);
