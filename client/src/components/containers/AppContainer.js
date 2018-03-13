import { connect } from "react-redux";
import App from "../App";
import { firePerson, hirePerson } from "../../ducks/person";

export default connect(
  state => ({
    persons: state.person.get("persons")
  }),
  {
    firePerson,
    hirePerson
  }
)(App);
