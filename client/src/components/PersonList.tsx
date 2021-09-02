import { FC, memo } from "react";
import { PersonType } from "../services/person";
import Person from "./Person";
import Metadata from "./PersonListMetadata";

type Props = {
  persons: PersonType[];
  firePerson: (id: string) => void;
  showMetadata?: boolean;
};

const PersonList: FC<Props> = (props) => {
  const { persons, firePerson, showMetadata = false } = props;

  return (
    <div>
      {showMetadata && <Metadata persons={persons} />}

      {persons.map((p) => (
        <Person firePerson={firePerson} key={p.id} person={p} />
      ))}
    </div>
  );
};

export default memo(PersonList);
