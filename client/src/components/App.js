import React from "react";
import PersonList from "./PersonList";
import HirePersonForm from "./HirePersonForm";
import Loading from "./Loading";

import "./App.pcss";

const isGood = person => {
  return (person.gender === "m" && person.age < 30) || person.relatedToCEO;
};

class App extends React.Component {
  componentDidMount() {
    const { getPersons } = this.props;
    getPersons();
  }

  render() {
    const { persons, firePerson, hirePerson, loading } = this.props;

    const goodPersons = persons.filter(isGood);
    const badPersons = persons.filter(p => !isGood(p));

    return (
      <div>
        {loading && <Loading />}

        <h1>Fraktio ERP</h1>

        <HirePersonForm hirePerson={hirePerson} />

        <h2>Pahat ihmiset</h2>
        <PersonList showMetadata persons={badPersons} firePerson={firePerson} />

        <h2>Hyvät ihmiset</h2>
        <PersonList persons={goodPersons} firePerson={firePerson} />
      </div>
    );
  }
}

export default App;
