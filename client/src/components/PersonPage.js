import React from "react";
import PropTypes from "prop-types";

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

NeedsPerson.propTypes = {
  children: PropTypes.func.isRequired
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
          <table>
            <tbody>
              <tr>
                <th>E-mail</th>
                <td>{person.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </NeedsPerson>
  );
};

export default PersonPage;
