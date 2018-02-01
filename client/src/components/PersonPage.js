import React from "react";

const PersonPage = props => {
  const { person } = props;

  if (!person) {
    return null;
  }

  return (
    <div>
      <h2>{person.firstName} {person.lastName}</h2>

      <p>
        {person.email}
      </p>
    </div>
  );
}

export default PersonPage;
