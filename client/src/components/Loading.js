import React from "react";
import Icon from "react-fa";
import styles from "./Loading.pcss";

const Loading = props => {
  return (
    <div className={styles.root}>
      <Icon name="spinner" size="2x" spin />
    </div>
  );
};

export default Loading;
