import React from 'react';
import PersonList from './PersonList';
import PersonAddForm from './PersonAddForm';
import styles from './App.pcss';
import Loading from './Loading';

class App extends React.Component {

  componentWillMount() {
    const { getPersons } = this.props;
    getPersons();
  }

  render() {
    const {
      loading,
      children,
      errorMessage,
    } = this.props;

    return (
      <div className={styles.root}>

        {(loading > 0) && <Loading />}

        <h1>
          Trollo
          <img alt="Trollo" src={require('../assets/trollo.png')} />
        </h1>

        {errorMessage ? <div>{errorMessage}</div> : children}

      </div>
    );
  }
}

export default App;
