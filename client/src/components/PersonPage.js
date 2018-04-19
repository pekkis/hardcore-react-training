import React from "react";

const needsPerson = Component => props => {
  const { person, ...rest } = props;
  if (!person) {
    return null;
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
      {({ person }) => (
        <div>
          <h2>
            {person.lastName}, {person.firstName}
          </h2>
        </div>
      )}
    </NeedsPerson>
  );
};

export default PersonPage;
