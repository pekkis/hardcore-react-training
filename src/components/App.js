import React from 'react';
import styles from './App.pcss';
import PersonList from './PersonList.js';
import AddPersonForm from './AddPersonForm';
import Loading from './Loading';
import { List } from 'immutable';

class App extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getPersons } = this.props;
    getPersons();
  }

  render() {
    const { loading, children } = this.props;

    return (
      <div className={styles.root}>
        <h1>MEGA APP</h1>
        {!!loading && <Loading />}
        {children}
      </div>
    );
  }

};

export default App;
