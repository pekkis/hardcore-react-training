import React from 'react';
import logo from '../assets/trollo.png';
import styles from './App.pcss';
import axios from 'axios';

class App extends React.Component {

  render() {
    return (
      <div className={styles.root}>
        <img src={logo} />
          <h2>Hello Pekkis, our glorious leader! You rock so much!</h2>
      </div>
    );
  }
}


export default App;
