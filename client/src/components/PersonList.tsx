import React, { FunctionComponent } from "react";
import Person from "./Person";
import { PersonInterface } from "../types";

type Props = {
  persons: PersonInterface[];
  firePerson: (id: string) => void;
};

const PersonList: FunctionComponent<Props> = (props) => {
  const { persons, firePerson } = props;
  return (
    <div>
      {persons.map((person) => {
        return (
          <Person key={person.id} person={person} firePerson={firePerson} />
        );
      })}
    </div>
  );
};

export default PersonList;
