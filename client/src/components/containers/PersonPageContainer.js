import PersonPage from "../PersonPage";
import { connect } from "react-redux";
import { withRouter } from "react-router";

export default withRouter(
  connect((state, props) => ({
    person: state.person.getIn(["persons", props.match.params.id])
  }))(PersonPage)
);
