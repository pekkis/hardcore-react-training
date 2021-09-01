import { FC, memo } from "react";
import { PersonType } from "../services/person";
import Person from "./Person";

type Props = {
  persons: PersonType[];
  firePerson: (id: string) => void;
};

const PersonList: FC<Props> = (props) => {
  const { persons, firePerson } = props;
  return (
    <div>
      {persons.map((p) => (
        <Person firePerson={firePerson} key={p.id} person={p} />
      ))}
    </div>
  );
};

export default memo(PersonList);
