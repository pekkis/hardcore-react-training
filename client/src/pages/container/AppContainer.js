import { connect } from "react-redux";
import { getPersons, deletePerson, addPerson } from "../../ducks/generic";
import App from "../App";

export default connect(
  state => ({
    persons: state.generic.get("persons")
  }),
  {
    getPersons,
    deletePerson,
    addPerson
  }
)(App);
