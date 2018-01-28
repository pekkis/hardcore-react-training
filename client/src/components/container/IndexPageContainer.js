import IndexPage from "../IndexPage";
import { connect } from "react-redux";
import { addPerson, deletePerson } from "../../ducks/generic";

export default connect(
  state => ({
    persons: state.generic.get("persons"),
  }),
  {
    addPerson,
    deletePerson
  }
)(IndexPage);
