import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../App';
import { getPersons } from '../../ducks/person';

export default connect(
  state => ({
    loading: state.generic.get('loading'),
    route: state.router.route,
  }),
  dispatch => bindActionCreators({
    getPersons,
  }, dispatch),
)(App);
