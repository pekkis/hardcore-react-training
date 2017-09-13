import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../App';
import { getPersons } from '../../ducks/person';
import { withRouter } from 'react-router';
import { compose } from 'recompose';

export default compose(
  withRouter,
  connect(
    state => ({
      loading: state.person.get('loading'),
    }),
    dispatch => bindActionCreators({
      getPersons,
    }, dispatch)
  )
)(App);
