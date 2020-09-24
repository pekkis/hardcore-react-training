import React, { Dispatch, FunctionComponent } from "react";
import Person from "./Person";
import { PersonInterface } from "../types";

type Props = {
  persons: PersonInterface[];
  dispatch: Dispatch<{ type: string; payload: any }>;
};

const PersonList: FunctionComponent<Props> = (props) => {
  const { persons, dispatch } = props;
  return (
    <div>
      {persons.map((person) => {
        return <Person key={person.id} person={person} dispatch={dispatch} />;
      })}
    </div>
  );
};

export default React.memo(PersonList);
