import { connect } from "react-redux";
import IndexPage from "../IndexPage";
import { hirePerson, firePerson } from "../../ducks/person";
import { compose } from "redux";

export default compose(
  connect(
    state => ({
      persons: state.person.get("persons").toList()
    }),
    {
      hirePerson,
      firePerson
    }
  )
)(IndexPage);
