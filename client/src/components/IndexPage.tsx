import React, { FunctionComponent } from "react";
import { List } from "immutable";
import { PersonType } from "./Person";
import PersonList from "./PersonList";
import HirePersonForm from "./HirePersonForm";

type Props = {
  persons: List<PersonType>;
  hirePerson: (person: PersonType) => void;
  firePerson: (id: string) => void;
};

const IndexPage: FunctionComponent<Props> = props => {
  const { persons, hirePerson, firePerson } = props;

  const isGood = (p: PersonType) => p.age < 30;

  const goodPersons = persons.filter(isGood);
  const badPersons = persons.filter(p => !isGood(p));

  return (
    <div>
      <hr />
      <HirePersonForm hirePerson={hirePerson} />
      <hr />

      <h2>Pahikset</h2>
      <PersonList firePerson={firePerson} persons={badPersons} showMetadata />

      <h2>Hyvikset</h2>
      <PersonList firePerson={firePerson} persons={goodPersons} />
    </div>
  );
};

export default IndexPage;
