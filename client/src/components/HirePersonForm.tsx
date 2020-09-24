import { FunctionComponent } from "react";
import { PersonInterface } from "../types";
import styles from "./HirePersonForm.module.pcss";

import React from "react";

export type HireablePerson = Omit<PersonInterface, "id">;

type Props = {
  hirePerson: (person: HireablePerson) => void;
};

const HirePersonForm: FunctionComponent<Props> = (props) => {
  const { hirePerson } = props;

  return <div className={styles.form}>Oh noes hireperson form!</div>;
};

export default HirePersonForm;
