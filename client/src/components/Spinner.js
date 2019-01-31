import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Spinner = props => {
  const { className } = props;
  return (
    <div className={className}>
      <FontAwesomeIcon icon={["fas", "spinner"]} pulse spin />
    </div>
  );
};

export default styled(Spinner)`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1em;
  border-radius: 50%;
  position: fixed;
  top: 1em;
  right: 1em;
  color: rgb(255, 255, 255);
`;
