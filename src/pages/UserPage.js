import React from 'react';

const needsPerson = BaseComponent => props => {
  const { person, ...rest } = props;
  if (!person) {
    return false;
  }
  return (
    <BaseComponent {...rest} person={person} />
  );
};

class UserPage extends React.Component {

  render() {
    const { person } = this.props;
    return (
      <div>
        <h2>{person.firstName} {person.lastName}</h2>
      </div>
    );
  }
};

export default needsPerson(UserPage);
