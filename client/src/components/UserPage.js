import React from "react";

const needsPerson = Component => props => {
  const { person } = props;
  if (!person) {
    return false;
  }

  return (
    <Component {...props} person={person} />
  );
};

const UserPage = props => {
  const { person } = props;
  return (
    <div>
      <h2>
        {person.lastName}, {person.firstName}
      </h2>

      <p>Ihana ihminen.</p>
    </div>
  );
};

export default needsPerson(UserPage);
