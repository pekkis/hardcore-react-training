import React from "react";
import PersonList from "./PersonList";
import AddPersonForm from "./AddPersonForm";
import ShadowedBox from "./ShadowedBox";
import { createPerson } from "../services/person";

const IndexPage = props => {

  const { persons, deletePerson, addPerson } = props;

  return (
    <section>

      <ShadowedBox>
        <AddPersonForm onSubmit={values => {
            const personToBeAdded = {
              ...createPerson(),
              ...values
            };
            addPerson(personToBeAdded);
        }} />
      </ShadowedBox>

      <h2>Good Employees</h2>
      <PersonList
        deletePerson={deletePerson}
        persons={persons.filter(p => p.age < 30)}
      />

      <h2>Bad Employees</h2>
      <PersonList
        deletePerson={deletePerson}
        persons={persons.filter(p => p.age >= 30)}
      />

    </section>
  );
}

export default IndexPage;
