import { ascend, prop, sortWith } from "ramda";
import { FC } from "react";
import { PersonType } from "./App";
import HirePersonForm from "./HirePersonForm";
import PersonList from "./PersonList";

type Props = {
  persons: PersonType[];
  hirePerson: (person: PersonType) => void;
  firePerson: (id: string) => void;
};

const sortByName = sortWith<PersonType>([
  ascend(prop("lastName")),
  ascend(prop("firstName"))
]);

const isGood = (p: PersonType): boolean =>
  p.age < 30 || p.relatedToCEO === true;

const IndexPage: FC<Props> = ({ persons, hirePerson, firePerson }) => {
  console.log(persons, "persons");

  const sorted = sortByName(persons);

  const goodPeople = sorted.filter(isGood);
  const badPeople = sorted.filter((p) => !isGood(p));

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
