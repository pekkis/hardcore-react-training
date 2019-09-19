import React from "react";
import Person from "./Person";
import PropTypes from "prop-types";
import ImmutablePropTypes from "react-immutable-proptypes";
import posed, { PoseGroup } from "react-pose";

const ListContainer = posed.div({
  tussi: {
    staggerChildren: 500
  },
  exit: {
    staggerChildren: 500
  },
  enter: {
    staggerChildren: 500
  }
});

const PersonContainer = posed.div({
  tussi: {
    x: "-500px"
  },
  enter: {
    x: 0
  },
  exit: {
    opacity: 0.5,
    rotate: "1000deg",
    zoom: 5,
    x: 0,
    transition: {
      duration: 2000
    }
  }
});

const PersonList = props => {
  const { persons, showMetadata, ...rest } = props;

  const avg = persons.reduce((a, p) => a + p.age, 0) / persons.count();

  return (
    <div>
      {showMetadata && <p>Keski-ikä: {avg} vuotta</p>}

      <ListContainer>
        <PoseGroup preEnterPose="tussi">
          {persons
            .sortBy(p => p.firstName)
            .sortBy(p => p.lastName)
            //.sort((p1, p2) => (p1.lastName > p2.lastName ? 1 : -1))
            .map(p => (
              <PersonContainer key={p.id}>
                <Person {...rest} person={p} />
              </PersonContainer>
            ))}
        </PoseGroup>
      </ListContainer>
    </div>
  );
};

PersonList.propTypes = {
  persons: ImmutablePropTypes.list.isRequired,
  showMetadata: PropTypes.bool.isRequired
};

PersonList.defaultProps = {
  showMetadata: false
};

export default PersonList;
