import { connect } from "react-redux";
import IndexPage from "../IndexPage";
import { hirePerson, firePerson } from "../../ducks/person";

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

export default connect(
  state => ({
    persons: state.person.get("persons")
  }),
  {
    hirePerson,
    firePerson
  }
)(IndexPage);
