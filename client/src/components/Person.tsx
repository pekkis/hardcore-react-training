import { FunctionComponent, memo } from "react";
import { PersonInterface } from "../types";

/** @jsx jsx */
import { jsx } from "@emotion/core";
import Button from "./Button";

interface Props {
  person: PersonInterface;
  firePerson: (id: string) => void;
}

const Person: FunctionComponent<Props> = ({ person, firePerson }) => {
  return (
    <div
      css={[
        {
          border: "10px solid rgb(0, 0, 0)",
          borderRadius: "10px",
          margin: "1em 0",
          padding: "1em",
          display: "flex",
          flexBasis: "100%",
          justifyItems: "flex-end",
          justifyContent: "flex-end"
        },
        person.gender === "m" && {
          backgroundColor: "rgb(200, 200, 255)"
        },
        person.gender === "f" && {
          backgroundColor: "rgb(255, 200, 200)"
        }
      ]}
    >
      <div
        css={{
          flexBasis: "100%",
          fontSize: "1.33em"
        }}
      >
        <strong>{person.lastName}</strong>, {person.firstName}
      </div>
      <div
        css={{
          flexBasis: "50%",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <div>
          <strong>Ikä: </strong>
          {person.age.toFixed(2)} v
        </div>
        <div>
          <strong>Sukupuoli: </strong>
          {person.gender}
        </div>

        <div
          css={{
            marginTop: "1em"
          }}
        >
          <Button
            disabled={person.isBeingFired}
            onClick={() => {
              firePerson(person.id);
            }}
          >
            vapauta
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(Person);
