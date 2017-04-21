import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PersonPage from '../PersonPage';
import { deletePerson } from '../../ducks/person';
import { push } from 'redux-little-router';

export default connect(
  state => ({
    person: state.person.get('persons').find(p => p.id === state.router.params.id),
  }),
  dispatch => bindActionCreators({
    deletePerson,
    push,
  }, dispatch),
)(PersonPage);
