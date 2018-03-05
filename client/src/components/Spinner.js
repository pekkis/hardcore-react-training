import React from "react";
import Icon from "react-fa";
import styles from "./Spinner.pcss";

const Spinner = () => {
  return (
    <div className={styles.root}>
      <Icon name="spinner" spin />
    </div>
  );
};

export default Spinner;
