import React from "react";
import PropTypes from "prop-types";

const needsPerson = params => Component => props => {
  const { person, ...rest } = props;
  if (!person) {
    return null;
  }

  if (person.age < params.age) {
    return false;
  }

  return <Component {...rest} person={person} />;
};

const NeedsPerson = props => {
  const { person, children } = props;
  if (!person) {
    return null;
  }

  return children({ person });
};

NeedsPerson.propTypes = {
  children: PropTypes.func.isRequired
};

const PersonPage = props => {
  const { person } = props;

  return (
    <div>
      <NeedsPerson person={person}>
        {({ person }) => (
          <React.Fragment>
            <h2>
              <strong>{person.lastName}</strong>, {person.firstName}
            </h2>
            <p>Diiteils.</p>
          </React.Fragment>
        )}
      </NeedsPerson>
    </div>
  );
};

export default PersonPage;
// export default needsPerson({ age: 30 })(PersonPage);
