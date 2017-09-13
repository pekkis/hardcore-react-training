import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IndexPage from '../IndexPage';
import { hirePerson, firePerson } from '../../ducks/person';

export default connect(
  state => ({
    persons: state.person.get('persons'),
  }),
  dispatch => bindActionCreators({
    hirePerson,
    firePerson,
  }, dispatch)
)(IndexPage);
