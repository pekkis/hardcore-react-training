import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};

const Spinner: FunctionComponent<Props> = () => {
  return (
    <div
      css={{
        position: "fixed",
        top: "1em",
        right: "1em",
        padding: "1em",
        fontSize: "3em",
        color: "rgb(255, 255, 255)",
        backgroundColor: "rgba(0, 0, 0, .5)",
        borderRadius: "50%"
      }}
    >
      <FontAwesomeIcon icon={["fas", "spinner"]} pulse />
    </div>
  );
};

export default Spinner;
