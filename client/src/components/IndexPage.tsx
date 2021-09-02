/** @jsxImportSource @emotion/react */

import { FC } from "react";
import { PersonType } from "../services/person";
import HirePersonForm from "./HirePersonForm";
import PersonList from "./PersonList";

const isGood = (p: PersonType) => p.age < 30;

type Props = {
  firePerson: (id: string) => void;
  hirePerson: (person: PersonType) => void;
  persons: PersonType[];
  numberOfRenders: number;
};

const IndexPage: FC<Props> = (props) => {
  const { persons, firePerson, hirePerson, numberOfRenders } = props;

  const goodPersons = persons.filter(isGood);
  const badPersons = persons.filter((p) => !isGood(p));

  return (
    <section>
      <HirePersonForm hirePerson={hirePerson} />
      <p
        css={{
          fontSize: "50px",
          color: "#fff",
          textShadow: "1px 1px 3px rgb(0, 0, 0)"
        }}
      >
        {numberOfRenders} renders
      </p>
      <h2>Pahat</h2>
      <PersonList showMetadata firePerson={firePerson} persons={badPersons} />
      <h2>Hyvät</h2>
      <PersonList firePerson={firePerson} persons={goodPersons} />)
    </section>
  );
};

export default IndexPage;
