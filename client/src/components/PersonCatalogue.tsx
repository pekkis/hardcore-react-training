import { Dispatch, FunctionComponent } from "react";
import React from "react";
import { PersonInterface } from "../types";
import PersonList from "./PersonList";
import * as R from "ramda";

type Props = {
  persons: PersonInterface[];
  dispatch: Dispatch<{ type: string; payload: any }>;
};

const nameSort = R.sortWith<PersonInterface>([
  R.ascend(R.prop("lastName")),
  R.ascend(R.prop("firstName"))
]);

// bacon.map('.loso') bacon.map(R.prop("loso"))

const isGood = (person: PersonInterface) => {
  // lodash.map(persons, p => {})

  if (person.relatedToCEO) {
    return true;
  }

  if (person.age < 30) {
    return true;
  }

  return false;
};

/*
Composing stuff is a nice functional paradigm we are actively opting out of.

I think that it is stupid of us to linger in the current _ world.
We should most definitely move to FP world and native world.
*/
const isBad = R.compose(R.not, isGood);

const getGoodPersons = R.compose(R.filter(isGood), nameSort);

const getBadPersons = R.compose(R.filter(isBad), nameSort);

const PersonCatalogue: FunctionComponent<Props> = (props) => {
  const { persons, dispatch } = props;

  // const sorted = nameSort(persons);

  /* Native stuff */
  // const goodPersons = sorted.filter(isGood);
  // const badPersons = sorted.filter(isBad);

  /* Functional stuff */
  const goodPersons = getGoodPersons(persons);
  const badPersons = getBadPersons(persons);

  /*
   */

  return (
    <div>
      <h2>Bad people</h2>

      <PersonList persons={badPersons} dispatch={dispatch} />

      <h2>Good people</h2>
      <PersonList persons={goodPersons} dispatch={dispatch} />
    </div>
  );
};

export default React.memo(PersonCatalogue);
