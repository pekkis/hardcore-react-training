import React from "react";

const needsPerson = options => Component => props => {
  const { person, ...rest } = props;
  if (!person) {
    return "ei löydy";
  }

  if (person.age < options.minAge) {
    return "kielletty";
  }

  return <Component {...rest} person={person} />;
};

const NeedsPerson = props => {
  const { person, children, ...rest } = props;
  if (!person) {
    return "ei löydy";
  }
  return children({
    ...rest,
    person
  });
};

const PersonPage = props => {
  const { person } = props;

  return (
    <NeedsPerson person={person}>
      {({ person }) => {
        return (
          <div>
            <h2>
              {person.lastName}, {person.firstName}
            </h2>

            <p>Surullinen elämäntarina.</p>
          </div>
        );
      }}
    </NeedsPerson>
  );
};

export default PersonPage;
