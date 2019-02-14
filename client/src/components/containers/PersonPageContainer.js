import { connect } from "react-redux";
import PersonPage from "../PersonPage";

export default connect((state, props) => ({
  person: state.person.getIn(["persons", props.match.params.id])
}))(PersonPage);
