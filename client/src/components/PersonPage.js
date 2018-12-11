import React from "react";

const needsPerson = check => Component => props => {
  const { person } = props;
  if (!person) {
    return null;
  }

  if (!check(person)) {
    return "forbiddaaaa!";
  }

  return <Component {...props} person={person} />;
};

const NeedsPerson = props => {
  const { person, check, children, ...rest } = props;
  if (!person) {
    return null;
  }

  if (!check(person)) {
    return "forbiddaaaa!";
  }

  return children({
    ...rest,
    person
  });
};

const PersonPage = props => {
  return (
    <NeedsPerson person={props.person} check={p => true}>
      {({ person }) => (
        <div>
          <h2>
            <strong>{person.lastName}</strong>, {person.firstName}
          </h2>
        </div>
      )}
    </NeedsPerson>
  );
};

export default PersonPage;
