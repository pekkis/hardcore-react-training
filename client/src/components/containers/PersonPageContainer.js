import PersonPage from "../PersonPage";
import { connect } from "react-redux";

export default connect((state, props) => ({
  person: state.person.getIn(["persons", props.match.params.id])
}))(PersonPage);

/*
  props:
  {
    match: {
      params: {
        id: uuid
      }
    }
  }

*/
