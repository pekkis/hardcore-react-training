import { FC } from "react";
import { PersonType } from "./App";
import HirePersonForm from "./HirePersonForm";
import PersonList from "./PersonList";

type Props = {
  persons: PersonType[];
  hirePerson: (person: PersonType) => void;
  firePerson: (id: string) => void;
};

const isGood = (p: PersonType): boolean =>
  p.age < 30 || p.relatedToCEO === true;

const IndexPage: FC<Props> = ({ persons, hirePerson, firePerson }) => {
  console.log(persons, "persons");

  const goodPeople = persons.filter(isGood);
  const badPeople = persons.filter((p) => !isGood(p));

  return (
    <section>
      <HirePersonForm hirePerson={hirePerson} />

      <h2>Bad People</h2>
      <PersonList firePerson={firePerson} persons={badPeople} showMetadata />

      <h2>Good People</h2>
      <PersonList firePerson={firePerson} persons={goodPeople} />
    </section>
  );
};

export default IndexPage;
