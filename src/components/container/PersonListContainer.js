import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PersonList from '../PersonList';
import { deletePerson } from '../../ducks/person';

console.log(deletePerson);

export default connect(
  undefined,
  dispatch => bindActionCreators({
    deletePerson,
  }, dispatch)
)(PersonList);
