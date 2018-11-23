import React from "react";

const needsPerson = check => Component => props => {
  const { person, ...rest } = props;
  if (!person) {
    return null;
  }

  if (!check(person)) {
    return "forbiddaaaah!";
  }

  return <Component {...rest} person={person} />;
};

const NeedsPerson = props => {
  const { children, person, ...rest } = props;

  if (!person) {
    return null;
  }

  return children({
    ...rest,
    person
  });
};

const PersonPage = props => {
  return (
    <div>
      <NeedsPerson person={props.person}>
        {({ person }) => {
          return (
            <>
              <h2>
                {person.lastName}, {person.firstName}
              </h2>

              <p>Sad story here.</p>
            </>
          );
        }}
      </NeedsPerson>
    </div>
  );
};

export default PersonPage;
