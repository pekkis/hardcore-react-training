// @flow

import React from 'react';
import styles from './App.pcss';
import Loading from './Loading';

class App extends React.Component {

  componentWillMount() {
    const { getPersons } = this.props;
    getPersons();
  }

  render() {
    const { children,loading } = this.props;

    return (
      <div>
        {loading > 0 && <Loading />}

        <h1>Mega App</h1>

        {children}

      </div>
    );
  }
};

export default App;
