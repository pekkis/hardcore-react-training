import React from "react";

const needsPerson = params => Component => props => {
  const { person, ...rest } = props;
  if (!person) {
    return null;
  }

  if (params.minAge > person.age) {
    return "forbiddaah";
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
  //const { person } = props;

  return (
    <NeedsPerson person={props.person}>
      {({ person }) => {
        return (
          <div>
            <h2>
              {person.lastName}, {person.firstName}
            </h2>

            <p>A sad life story.</p>
          </div>
        );
      }}
    </NeedsPerson>
  );
};

export default PersonPage;
