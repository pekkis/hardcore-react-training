import React from "react";
import Icon from "react-fa";

const Loading = () => {
  const stylez = {
    padding: "1em",
    top: "1em",
    right: "1em",
    backgroundColor: "rgba(0,0,0, .5)",
    color: "rgb(255, 255, 255)",
    position: "fixed",
    borderRadius: "50%"
  };

  return <Icon style={stylez} name="spinner" spin size="2x" />;
};

export default Loading;
