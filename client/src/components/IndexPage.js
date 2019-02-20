import React from "react";
import PersonList from "./PersonList";
import HirePersonForm from "./HirePersonForm";

import "./App.pcss";

import styled from "styled-components";

class IndexPage extends React.Component {
  render() {
    const { persons, firePerson, hirePerson } = this.props;

    const isGood = person => {
      return person.gender === "m" && person.age < 30;
    };

    const goodPersons = persons.filter(isGood);
    const badPersons = persons.filter(p => !isGood(p));

    return (
      <div>
        <FormContainer>
          <HirePersonForm hirePerson={hirePerson} />
        </FormContainer>

        <h2>Bad Persons</h2>
        <PersonList showMetadata persons={badPersons} firePerson={firePerson} />

        <h2>Good Persons</h2>
        <PersonList persons={goodPersons} firePerson={firePerson} />
      </div>
    );
  }
}

const FormContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  padding: 1em;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: rgb(255, 255, 255);
`;

export default IndexPage;
