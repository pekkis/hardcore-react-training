import React from "react";

// needsPerson(p => p.age > 30)
const needsPerson = check => Component => props => {
  const { person, ...rest } = props;
  if (!person) {
    return "oh noes";
  }

  if (!check(person)) {
    return "forbiddaaah!";
  }

  return <Component {...rest} person={person} />;
};

const NeedsPerson = props => {
  const { person, children, ...tussi } = props;
  if (!person) {
    return "oh noes";
  }

  return children({
    person
  });
};

const PersonPage = props => {
  return (
    <NeedsPerson person={props.person}>
      {({ person }) => {
        return (
          <div>
            <h2>
              <strong>{person.lastName}</strong>, {person.firstName}
            </h2>

            <p>Surullinen elämäntarina tässä.</p>
          </div>
        );
      }}
    </NeedsPerson>
  );
};

export default PersonPage;
