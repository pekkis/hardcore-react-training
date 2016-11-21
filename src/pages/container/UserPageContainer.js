import { connect } from 'react-redux';
import UserPage from '../UserPage';

export default connect(
  (state, ownProps) => ({
    person: state.person.get('persons')
      .find(p => p.id === ownProps.params.id),
  })
)(UserPage);
