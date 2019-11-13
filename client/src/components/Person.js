import React from "react";
// import styles from "./Person.pcss";

// import cx from "classnames";
/*
{
  person: "jotakin_jota_et_voi_tietää",
  male: "jotain",
  female: "jotain muuta"
}
*/

import { Link } from "react-router-dom";

const Person = props => {
  const { person, firePerson } = props;

  return (
    <div
      css={[
        {
          border: "5px solid rgb(0, 0, 0)",
          borderRadius: "15px",
          margin: "1em 0",
          padding: "1em"
        },
        person.gender === "m" && {
          backgroundColor: "rgb(200, 200, 255)"
        },
        person.gender === "f" && {
          backgroundColor: "rgb(255, 200, 200)"
        }
      ]}
      key={person.id}
    >
      <Link to={`/person/${person.id}`}>
        {person.lastName} {person.firstName}
      </Link>
      <div>
        <button onClick={() => firePerson(person.id)}>vapauta!</button>
      </div>
    </div>
  );
};

export default React.memo(Person);
