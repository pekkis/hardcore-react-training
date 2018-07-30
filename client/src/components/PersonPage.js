import React from "react";
import { compose } from "recompose";

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

const obj = {};

const obj2 = {
  ...obj
};

const PersonPage = props => {
  return (
    <NeedsPerson person={props.person}>
      {props => {
        console.log(props, "proppo");
        const { person } = props;
        return (
          <React.Fragment>
            <h2>
              {person.lastName}, {person.age}
            </h2>

            <p>Moi!</p>
          </React.Fragment>
        );
      }}
    </NeedsPerson>
  );
};

export default PersonPage;
