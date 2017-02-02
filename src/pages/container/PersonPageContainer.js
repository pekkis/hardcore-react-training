import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PersonPage from '../PersonPage';
import { getPersons, addPerson, deletePerson } from '../../ducks/person';

export default connect(
  (state, props) => ({
    person: state.person.get('persons').find(p => p.id === props.params.id),
  }),
  dispatch => bindActionCreators({
    deletePerson,
  }, dispatch),
)(PersonPage);
