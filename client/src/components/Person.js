import React from "react";
import Button from "./Button";

import { Link } from "react-router-dom";

const Person = props => {
  const { person, firePerson } = props;
  return (
    <div
      css={[
        {
          border: "10px solid rgb(0, 0, 0)",
          padding: "1em",
          margin: "1em 0",
          borderRadius: "10px",

          "&:hover": {
            borderRadius: "15px"
          }
        },
        person.gender === "m" && {
          backgroundColor: "rgb(200, 200, 255)"
        },
        person.gender === "f" && {
          backgroundColor: "rgb(255, 200, 200)"
        }
      ]}
    >
      <Link to={`/person/${person.id}`}>
        {person.firstName} <strong>{person.lastName}</strong> (
        {person.age.toFixed(2)} v)
      </Link>

      <div>
        <Button
          disabled={person.isBeingFired}
          onClick={() => firePerson(person.id)}
        >
          <span>❤️</span> vapauta!
        </Button>
      </div>
    </div>
  );
};

export default React.memo(Person);
