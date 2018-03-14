import React from "react";

const needsPerson = Component => props => {
  return (
    <NeedsPerson {...props}>
      {props => {
        return <Component {...props} />;
      }}
    </NeedsPerson>
  );
};

const NeedsPerson = props => {
  const { children, person, ...rest } = props;
  if (!person) {
    return null;
  }
  return children({ ...rest, person });
};

const PersonPage = props => {
  const { person } = props;
  return (
    <div>
      <h2>
        {person.lastName}, {person.firstName}
      </h2>
    </div>
  );
};

export default needsPerson(PersonPage);
