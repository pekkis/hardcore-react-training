import { connect } from 'react-redux';
import UserPage from '../UserPage';

export default connect(
  (state, props) => ({
    person: state.person.get('persons').find(p => p.id === props.id),
  })
)(UserPage);
