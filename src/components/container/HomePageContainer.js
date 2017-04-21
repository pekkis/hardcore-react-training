import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HomePage from '../HomePage';
import { addPerson, deletePerson } from '../../ducks/person';

export default connect(
  state => ({
    persons: state.person.get('persons'),
    route: state.router.route,
  }),
  dispatch => bindActionCreators({
    addPerson,
    deletePerson,
  }, dispatch),
)(HomePage);
