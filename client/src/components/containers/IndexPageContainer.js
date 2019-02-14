import { connect } from "react-redux";
import IndexPage from "../IndexPage";
import { hirePerson, firePerson } from "../../ducks/person";

export default connect(
  state => ({
    persons: state.person.get("persons")
  }),
  {
    hirePerson,
    firePerson
  }
)(IndexPage);
