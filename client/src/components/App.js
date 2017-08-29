import React from 'react';
import logo from '../assets/trollo.png';
import styles from './App.pcss';
import Link from 'redux-first-router-link';
import IndexPage from './container/IndexPageContainer';
import UserPage from './container/UserPageContainer';

class App extends React.Component {

  render() {

    const { location } = this.props;

    return (
      <div className={styles.root}>
        <h1>
          <img src={logo} alt="trollo" /> <Link to={{ type: 'HOME' }}>Trollo</Link>
        </h1>

        {location.type === 'HOME' && <IndexPage />}
        {location.type === 'USER' && <UserPage id={location.payload.id} />}

      </div>
    );
  }
}

export default App;
