import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Example from '../Example';
import { setExample } from '../../ducks/example';

export default connect(
  state => ({
    example: state.example.get('example'),
  }),
  dispatch => bindActionCreators({
    setExample,
  }, dispatch)
)(Example);
