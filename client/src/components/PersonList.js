import React from "react";
import Person from "./Person";
import PropTypes from "prop-types";

const PersonList = props => {
  const { persons, ...rest } = props;

  const ageSum = persons.reduce((a, p) => a + p.age, 0);
  const averageAge = ageSum / persons.count();

  return (
    <div>
      <p>Henkilöitä listalla: {persons.length}</p>
      <p>Keski-ikä: {averageAge.toFixed(2)}</p>
      {persons
        .sortBy(p => p.firstName)
        .sortBy(p => p.lastName)
        // .reverse()
        .map(person => {
          return <Person {...rest} key={person.id} person={person} />;
        })}
    </div>
  );
};

PersonList.propTypes = {
  persons: PropTypes.array.isRequired
};

export default PersonList;
