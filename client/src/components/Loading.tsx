import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/** @jsx jsx */
import { jsx } from "@emotion/core";
import { FunctionComponent } from "react";

const Loading: FunctionComponent = () => {
  return (
    <div
      css={{
        position: "fixed",
        top: 0,
        right: 0,
        backgroundColor: "rgba(0, 0, 0, .5)",
        borderRadius: "100%",
        padding: "1em",
        margin: "1em"
      }}
    >
      <div
        css={{
          fontSize: "3em"
        }}
      >
        <FontAwesomeIcon icon={["fas", "spinner"]} spin />
      </div>
    </div>
  );
};

export default Loading;
