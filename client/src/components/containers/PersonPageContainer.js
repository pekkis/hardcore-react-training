import PersonPage from "../PersonPage";
import { connect } from "react-redux";

/*
props.match.params = {
  id: "an id"
}
*/

export default connect((state, props) => ({
  person: state.person.getIn(["persons", props.match.params.id])
}))(PersonPage);
