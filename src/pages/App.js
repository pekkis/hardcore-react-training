import React from 'react';
import styles from './App.pcss';
import Loading from '../components/Loading';

class App extends React.Component {

  /*
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
    }
  }
  */

  componentDidMount() {
    const { getPersons } = this.props;
    getPersons();
  }

  render() {
    const { children, loading } = this.props;
    return (
      <div>

        <h1>Harkkore app</h1>

        {!!loading && <Loading />}

        {children}

      </div>
    );
  }
};

export default App;
