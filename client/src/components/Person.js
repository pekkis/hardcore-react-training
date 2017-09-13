// @flow

import React from "react";
import styles from "./Person.pcss";
import cx from "classnames";
import Button from "./form/Button";
import { pure } from "recompose";
import { Link } from 'react-router-dom';
import FemaleInfo from './person/FemaleInfo';
import MaleInfo from './person/MaleInfo';
import { FormattedNumber } from 'react-intl';

const getInfoComponent = (person) => {
  const infoMap = {
    m: MaleInfo,
    f: FemaleInfo,
  };
  return infoMap[person.gender];
}

type PersonType = {
  firstName: string,
  lastName: string,
  salary: ?number,
};

type Props = {
  person: PersonType,
};

const Person = (props: Props) => {
  const { person, firePerson } = props;

  const InfoComponent = getInfoComponent(person);

  const classes = cx(styles.person, {
    [styles.male]: person.gender === "m",
    [styles.female]: person.gender === "f"
  });

  return (
    <div className={classes}>

      <Link to={`/user/${person.id}`}>
        <strong>{person.lastName}</strong>, {person.firstName}
      </Link>

      <div>
        Age: {person.age.toFixed(1)} years
      </div>



      <div>
        Salary: <FormattedNumber
          value={person.salary}
          style="currency"
          currency="USD"
        />
      </div>

      <InfoComponent person={person} />

      <Button
        onClick={() => {
          firePerson(person);
        }}
      >
        :) Erota :)
      </Button>
    </div>
  );
};

export default pure(Person);
