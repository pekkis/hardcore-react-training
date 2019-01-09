import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loading = props => {
  const { className } = props;
  return (
    <div className={className}>
      <FontAwesomeIcon pulse icon={["fas", "spinner"]} />
    </div>
  );
};

export default styled(Loading)`
  position: fixed;
  top: 1em;
  right: 1em;
  padding: 1em;
  background-color: rgba(0, 0, 0, 0.5);
  color: rgb(255, 255, 255);
  border-radius: 50%;
`;
