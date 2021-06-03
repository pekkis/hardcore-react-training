import { FC, memo } from "react";
import { PersonType } from "./App";
import Person from "./Person";

// import PropTypes from "prop-types";

type Props = {
  persons: PersonType[];
  showMetadata?: boolean;
  firePerson: (id: string) => void;
};

const PersonList: FC<Props> = ({
  persons,
  showMetadata = false,
  firePerson
}) => {
  return (
    <div>
      {showMetadata && <p>Metadata here.</p>}

      {persons.map((person) => {
        return (
          <Person firePerson={firePerson} key={person.id} person={person} />
        );
      })}
    </div>
  );
};

export default memo(PersonList);
