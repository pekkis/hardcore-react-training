import { connect } from 'react-redux';
import App from '../App';

export default connect(
  state => ({
    location: state.location,
  })
)(App);
