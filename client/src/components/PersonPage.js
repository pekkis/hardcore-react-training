import React from "react";

const needsPerson = check => Component => props => {
  const { person, ...rest } = props;
  if (!person) {
    return null;
  }

  if (!check(person)) {
    return "forbiddaaash!";
  }

  return <Component {...rest} person={person} />;
};

const NeedsPerson = props => {
  const { person, check, children } = props;
  if (!person) {
    return null;
  }

  if (!check(person)) {
    return "forbiddaaash!";
  }

  return children({
    person
  });
};

const PersonPage = props => {
  // const { person } = props;

  return (
    <NeedsPerson person={props.person} check={p => p.age < 2000}>
      {({ person }) => {
        return (
          <div>
            <h2>
              <strong>{person.lastName}</strong>, {person.firstName}
            </h2>
            hellurei
          </div>
        );
      }}
    </NeedsPerson>
  );
};

export default PersonPage;
