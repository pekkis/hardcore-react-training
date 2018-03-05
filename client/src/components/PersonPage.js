import React from "react";

const needsPerson = Component => props => {
  const { person, ...rest } = props;
  if (!person) {
    return null;
  }

  return <Component {...rest} person={person} />;
};

const RequiresPerson = props => {
  const { render, person, ...rest } = props;
  if (!person) {
    return null;
  }
  return render(...rest);
};

const PersonPage = props => {
  const { person } = props;

  return (
    <RequiresPerson
      person={person}
      render={props => {
        return (
          <div>
            <h2>
              {person.lastName}, {person.firstName}
            </h2>

            <p>Surullinen elämäntarina, epätoivoinen tilanne.</p>
          </div>
        );
      }}
    />
  );
};

export default PersonPage;
