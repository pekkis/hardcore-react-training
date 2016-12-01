import { connect } from 'react-redux';
import PersonPage from '../PersonPage';

export default connect(
  (state, props) => ({
    person: state.person.get('persons').find(p => p.id === props.params.id),
  })
)(PersonPage);
