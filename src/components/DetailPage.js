import React from 'react';
import { compose } from 'recompose';
import requiresPerson from './requiresPerson';

class DetailPage extends React.Component {

  render() {
    const {
      person,
      deletePerson
    } = this.props;

    if (!person) {
      return false;
    }

    return (
      <div>
        <h2>
          {person.lastName},
        {person.firstName}</h2>
      </div>
    );
  }
}

export default compose(
  requiresPerson,
)(DetailPage);
