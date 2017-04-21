import React from 'react';
import { Fragment } from 'redux-little-router';
import styles from './App.pcss';
import Loading from './Loading';
import PersonPage from './container/PersonPageContainer';
import HomePage from './container/HomePageContainer';

class App extends React.PureComponent {

  componentWillMount() {
    const { getPersons } = this.props;
    getPersons();
  }

  render() {
    const { loading } = this.props;
    return (
      <div>

        <h1>Super Application</h1>

        {(loading > 0) && <Loading />}

        <Fragment forRoute="/person/:id">
          <PersonPage />
        </Fragment>

        <Fragment forRoute="/home">
          <HomePage />
        </Fragment>

      </div>
    );
  }
};

export default App;
