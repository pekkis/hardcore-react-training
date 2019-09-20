import React from "react";

const needsPerson = params => Component => props => {
  const { person, ...rest } = props;
  if (!person) {
    return null;
  }

  if (person.age < params.minAge) {
    return "FORBIDDAAAAH!";
  }

  return <Component {...rest} person={person} />;
};

const NeedsPerson = props => {
  const { minAge, person, children, ...rest } = props;
  if (!person) {
    return null;
  }

  if (person.age < minAge) {
    return "FORBIDDAAAAH!";
  }

  return children({
    ...rest,
    person
  });
};

const PersonPage = props => {
  return (
    <NeedsPerson minAge={60} person={props.person}>
      {({ person }) => {
        return (
          <div>
            <h2>
              {person.lastName}, {person.firstName}
            </h2>

            <p>surullinen elämäntarina</p>
          </div>
        );
      }}
    </NeedsPerson>
  );
};

export default PersonPage;
