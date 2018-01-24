import PersonPage from "../PersonPage";
import { connect } from "react-redux";

export default connect(
  (state, props) => ({
    person: state.generic.get("persons").find(p => p.id === props.match.params.id),
  })
)(PersonPage);
