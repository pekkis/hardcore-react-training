import { bindActionCreators } from 'redux';
import {
  addPerson,
  deletePerson
} from '../../ducks/person';

import { connect } from 'react-redux';
import IndexPage from '../IndexPage';

export default connect(
  state => ({
    persons: state.person.get('persons'),
  }),
  dispatch => bindActionCreators({
    addPerson,
    deletePerson,
  }, dispatch)
)(IndexPage);
