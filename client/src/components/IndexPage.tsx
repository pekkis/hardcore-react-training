import { FC } from "react";
import { PersonInterface } from "../services/person";

import { sortWith, descend, ascend, filter, prop, pipe } from "ramda";

const sortByName = sortWith<PersonInterface>([
  ascend(prop("lastName")),
  ascend(prop("firstName"))
]);

// prop("jotain") === (a) => a.jotain

type Props = {
  persons: PersonInterface[];
  hirePerson: (person: PersonInterface) => void;
  firePerson: (id: string) => void;
};

import HirePersonForm from "./HirePersonForm";
import PersonList from "./PersonList";

const IndexPage: FC<Props> = ({ persons, hirePerson, firePerson }) => {
  const isGood = (p: PersonInterface) => p.age < 30;

  const goodPersons = pipe(sortByName, filter(isGood))(persons);

  const badPersons = pipe(
    sortByName,
    filter((p: PersonInterface) => !isGood(p))
  )(persons);

  // const sorted = sortByName(persons);

  // const goodPersons = sorted.filter(isGood);
  // const badPersons = sorted.filter((p) => !isGood(p));

  return (
    <section>
      <HirePersonForm hirePerson={hirePerson} />

      <h2>Pahat</h2>
      <PersonList firePerson={firePerson} persons={badPersons} />

      <h2>Hyvät</h2>
      <PersonList firePerson={firePerson} persons={goodPersons} />
    </section>
  );
};

export default IndexPage;
