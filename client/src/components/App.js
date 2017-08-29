import React from 'react';
import logo from '../assets/trollo.png';
import styles from './App.pcss';
import PersonList from './PersonList';
import Loading from './Loading';

class App extends React.Component {

  componentDidMount() {
    const { getPersons } = this.props;
    getPersons();
  }

  render() {
    const { persons } = this.props;

    console.log(persons);

    if (persons.count() === 0) {
      return (
        <Loading />
      );
    }

    const oldPeoples = persons.filter(p => p.age > 30);
    const youngPeoples = persons.filter(p => p.age <= 30);

    return (
      <div className={styles.root}>
        <h1>
          <img src={logo} alt="trollo" /> Trollo
        </h1>

        <h2>Good Peoples</h2>

        <PersonList persons={youngPeoples} />

        <h2>Bad Peoples</h2>

        <PersonList persons={oldPeoples} />

      </div>
    );
  }
}

export default App;
