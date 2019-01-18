import React from "react";

const needsPerson = check => Component => props => {
  const { person, ...rest } = props;
  if (!person) {
    return null;
  }

  if (!check(person)) {
    return "forbiddaaaaah!";
  }

  return <Component {...rest} person={person} />;
};

const NeedsPerson = props => {
  const { person, check, children, ...rest } = props;
  if (!person) {
    return null;
  }

  if (!check(person)) {
    return "forbiddaaaaah!";
  }

  return children({
    person
  });
};

const PersonPage = props => {
  // const { person } = props;

  return (
    <NeedsPerson person={props.person} check={p => p.age <= 30}>
      {({ person, firePerson }) => {
        return (
          <div>
            <h2>
              <strong>{person.lastName}</strong>, {person.firstName}
            </h2>
            <p>A sad life story.</p>
          </div>
        );
      }}
    </NeedsPerson>
  );
};

export default PersonPage;
