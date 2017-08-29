import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPersons } from '../../ducks/person';
import App from '../App';

export default connect(
  state => ({
    persons: state.person.get('persons'),
  }),
  dispatch => bindActionCreators({
    getPersons,
  }, dispatch)
)(App);
