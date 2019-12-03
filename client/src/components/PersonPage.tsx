import React, { FunctionComponent } from "react";
import { PersonType } from "./Person";
import Button from "./Button";
import { jsx } from "@emotion/core";

type Props = {
  person?: PersonType;
  firePerson: (id: string) => void;
};

const PersonPage: FunctionComponent<Props> = props => {
  const { person, firePerson } = props;

  if (!person) {
    return <div>not found</div>;
  }

  return (
    <div>
      <h2>
        <strong>{person.lastName}</strong>, {person.firstName}
      </h2>

      <p>Surullinen elämäntarina.</p>

      <p
        css={{
          fontSize: "5em"
        }}
      >
        <Button
          onClick={() => {
            // make dis work!
            firePerson(person.id);
          }}
        >
          ❤️ kesälaitumille mars ❤️
        </Button>
      </p>
    </div>
  );
};

export default PersonPage;
