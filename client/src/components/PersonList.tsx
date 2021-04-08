import { FC, memo } from "react";
import { PersonInterface } from "../types";
import Person from "./Person";

type Props = {
  persons: PersonInterface[];
  firePerson: (id: string) => void;
};

const PersonList: FC<Props> = ({ persons, firePerson }) => {
  return (
    <div>
      {persons.map((person) => (
        <Person key={person.id} person={person} firePerson={firePerson} />
      ))}
    </div>
  );
};

export default memo(PersonList);
