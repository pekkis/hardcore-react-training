import React from "react";

const needsPerson = check => Component => props => {
  const { person, ...rest } = props;
  if (!person) {
    return null;
  }

  if (!check(person)) {
    return "forbiddaaah!";
  }

  return <Component {...rest} person={person} />;
};

const NeedsPerson = props => {
  const { person, children, ...rest } = props;
  if (!person) {
    return null;
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
          <section>
            <h2>
              <strong>{person.lastName}</strong>, {person.firstName}
            </h2>

            <p>
              Henkilön hellyyttävä elämäntarina. Kaksi lasta, yksinhuoltaja,
              koira.
            </p>
          </section>
        );
      }}
    </NeedsPerson>
  );
};

export default PersonPage;
