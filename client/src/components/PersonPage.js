import React from "react";

const needsPerson = options => Component => props => {

  const { person, ...rest } = props;
  if (!person) {
    return false;
  }

  const isSafe = options.isSafe(person);

  return <Component {...rest} person={person} isSafe={isSafe} />
};

const PersonPage = props => {
  const { person, isSafe } = props;
  return (
    <section>
      <h2>{person.lastName}, {person.firstName}</h2>
      <p>
        Sad life story. Many children. Housing loan.
      </p>

      <p>{person.age}</p>

      {isSafe && <p>THIS PERSON IS SAFE FROM PERSECUTION</p>}
    </section>
  );
};

export default needsPerson({
  isSafe: p => p.age <= 18,
})(PersonPage);
