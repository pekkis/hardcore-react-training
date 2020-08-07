import React, { FunctionComponent, memo } from "react";
import Person from "./Person";
import { PersonInterface } from "../types";

interface Props {
  persons: PersonInterface[];
  firePerson: (id: string) => void;
}

const getAverageAge = (persons: PersonInterface[]) => {
  return persons.reduce((a, p) => a + p.age, 0) / persons.length;
};

const Persons: FunctionComponent<Props> = ({ persons, firePerson }) => {
  if (persons.length === 0) {
    return <div>Lista onpi tyhjä.</div>;
  }

  return (
    <div>
      <p>Henkilöitä listalla: {persons.length}.</p>
      <p>Keski-ikä: {getAverageAge(persons)} vuotta.</p>

      {persons.map((person) => (
        <Person key={person.id} person={person} firePerson={firePerson} />
      ))}
    </div>
  );
};

export default memo(Persons);
