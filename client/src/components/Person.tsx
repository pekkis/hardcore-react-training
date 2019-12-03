import React, { FunctionComponent } from "react";
import { lighten } from "polished";
import Button from "./Button";
import { Link } from "react-router-dom";

export type PersonType = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  isBeingFired: boolean;
};

type Props = {
  person: PersonType;
  firePerson: (id: string) => void;
};

const Person: FunctionComponent<Props> = props => {
  const { person, firePerson } = props;

  return (
    <div
      css={[
        {
          border: "10px solid rgb(0, 0, 0)",
          margin: "1em 0",
          padding: "1em",
          borderRadius: "10px"
        },
        person.gender === "m" && {
          backgroundColor: "rgb(200, 200, 255)"
        },
        person.gender === "f" && {
          backgroundColor: "rgb(255, 200, 200)",
          "&:hover": {
            backgroundColor: lighten(0.05, "rgb(255, 200, 200)")
          }
        }
      ]}
    >
      <div>
        <Link to={`/person/${person.id}`}>
          {person.lastName} {person.firstName} ({person.age.toFixed(2)} v)
        </Link>
      </div>
      <div>
        <Button
          disabled={person.isBeingFired}
          onClick={() => firePerson(person.id)}
        >
          vapauta
        </Button>
      </div>
    </div>
  );
};

export default React.memo(Person);
