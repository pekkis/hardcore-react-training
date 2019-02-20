import React from "react";
import Person from "./Person";
import posed, { PoseGroup } from "react-pose";
import PropTypes from "prop-types";
import ImmutablePropTypes from "react-immutable-proptypes";

const PosedPerson = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

const PersonList = props => {
  const { persons, firePerson, showMetadata } = props;

  const averageAge = persons.reduce((r, p) => r + p.age, 0) / persons.count();

  return (
    <div>
      {showMetadata && (
        <>
          <p>Number of people: {persons.count()}</p>
          <p>Average age: {averageAge}</p>
        </>
      )}

      <PoseGroup>
        {persons
          .sortBy(p => p.firstName)
          .sortBy(p => p.lastName)
          .map(person => (
            <PosedPerson key={person.id}>
              <Person key={person.id} firePerson={firePerson} person={person} />
            </PosedPerson>
          ))
          .toList()}
      </PoseGroup>
    </div>
  );
};

PersonList.propTypes = {
  persons: ImmutablePropTypes.map.isRequired,
  firePerson: PropTypes.func.isRequired
};

PersonList.defaultProps = {
  showMetadata: false
};

export default PersonList;
