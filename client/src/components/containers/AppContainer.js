import App from "../App";
import { connect } from "react-redux";
import { getPersons, hirePerson, firePerson } from "../../ducks/person";

/*

{
  person: Map({
    persons: List()
  })
}


*/

export default connect(
  state => ({
    persons: state.person.get("persons")
  }),
  {
    getPersons,
    hirePerson,
    firePerson
  }
)(App);
