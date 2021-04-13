import { FC, memo } from "react";
import { PersonInterface } from "../types";
import Person from "./Person";
import { AnimatePresence } from "framer-motion";

type Props = {
  persons: PersonInterface[];
  firePerson: (id: string) => void;
};

const PersonList: FC<Props> = ({ persons, firePerson }) => {
  return (
    <div>
      <AnimatePresence>
        {persons.map((person) => (
          <Person key={person.id} person={person} firePerson={firePerson} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default memo(PersonList);
