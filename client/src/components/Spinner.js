import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Spinner = () => {
  return (
    <div
      css={{
        position: "absolute",
        fontSize: "2.5em",
        top: "1rem",
        right: "1rem",
        color: "rgb(255, 255, 255)",
        backgroundColor: "rgba(0, 0, 0, .5)",
        padding: "1em",
        borderRadius: "50%"
      }}
    >
      <FontAwesomeIcon icon={["fas", "spinner"]} spin />
    </div>
  );
};

export default Spinner;
