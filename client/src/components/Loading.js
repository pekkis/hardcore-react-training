import React from "react";
import Icon from "react-fa";
import styles from "./Loading.pcss";

const Loading = () => {
  return (
    <div className={styles.root}>
      <Icon name="spinner" spin />
    </div>
  );
};

export default Loading;
