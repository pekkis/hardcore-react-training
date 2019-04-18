import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Loading = props => {
  const { className } = props;

  return (
    <div className={className}>
      <FontAwesomeIcon icon={["fas", "spinner"]} spin />
    </div>
  );
};

export default styled(Loading)`
  position: fixed;
  top: 1em;
  right: 1em;
  padding: 1em;
  border-radius: 50%;
  color: rgb(255, 255, 255);
  background-color: rgba(0, 0, 0, 0.8);
`;
