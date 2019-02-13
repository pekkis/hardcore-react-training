import PersonPage from "../PersonPage";
import { connect } from "react-redux";

/*
{
  match: {
    params: {
      id: the_id
    }
  }
}
*/

export default connect((state, props) => ({
  person: state.person.getIn(["persons", props.match.params.id])
}))(PersonPage);
