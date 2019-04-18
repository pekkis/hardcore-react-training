import React from "react";

const withPerson = check => Component => props => {
  const { person, ...rest } = props;
  if (!person) {
    return "forbiddaah!";
  }

  if (!check(person)) {
    return "INVALID PERSON";
  }

  return <Component {...rest} person={person} />;
};

const WithPerson = props => {
  const { person, check, children, ...rest } = props;
  if (!person) {
    return "forbiddaah!";
  }

  if (!check(person)) {
    return "INVALID PERSON";
  }

  return children({
    ...rest,
    person
  });
};

const PersonPage = props => {
  return (
    <WithPerson person={props.person} check={p => p.age > 30}>
      {({ person }) => {
        return (
          <div>
            <h2>
              <strong>{person.lastName}</strong>, {person.firstName}
            </h2>

            <p>Surullinen elämäntarina</p>
          </div>
        );
      }}
    </WithPerson>
  );
};

export default PersonPage;
