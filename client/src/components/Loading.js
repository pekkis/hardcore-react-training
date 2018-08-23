import React from "react";
import Icon from "react-fa";

const Loading = () => {
  const styles = {
    position: "fixed",
    top: "1em",
    right: "1em",
    backgroundColor: "rgba(0, 0, 0, .5)",
    color: "rgb(255, 255, 255)",
    padding: "1em",
    fontSize: "2em",
    borderRadius: "50%"
  };

  return (
    <div style={styles}>
      <Icon name="spinner" spin />
    </div>
  );
};

export default Loading;
