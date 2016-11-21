// @flow

import { bindActionCreators } from 'redux';
import { getPersons } from '../../ducks/person';

import { connect } from 'react-redux';
import App from '../App';

export default connect(
  state => ({
    loading: state.generic.loading,
  }),
  dispatch => bindActionCreators({
    getPersons,
  }, dispatch)
)(App);
