import React from "react";
import PersonList from "./PersonList";
import AddPersonForm from "./AddPersonForm";
import Filters from "./Filters";
import { Set } from "immutable";

class IndexPage extends React.PureComponent {
  render() {
    let {
      persons,
      firing,
      hirePerson,
      firePerson,
      filters,
      setFilter
    } = this.props;

    /*
    persons = persons
      .filter(p => filters.get("gender").includes(p.gender))
      .filter(p => {
        return p.age >= filters.get("ageMin") && p.age <= filters.get("ageMax");
      })
      .sortBy(p => p.firstName)
      .sortBy(p => p.lastName);
      */

    return (
      <div>
        <h2>Palkkaa sukulainen</h2>

        <AddPersonForm hirePerson={hirePerson} />

        <hr />

        {/*<Filters filters={filters} setFilter={setFilter} />*/}

        <h2>Palkkalista</h2>

        <PersonList firing={Set()} firePerson={firePerson} persons={persons} />
      </div>
    );
  }
}

export default IndexPage;
