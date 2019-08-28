import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Spinner = props => {
  const { className } = props;
  return (
    <div className={className}>
      <FontAwesomeIcon icon={["fas", "spinner"]} pulse spin />
    </div>
  );
};

export default styled(Spinner)`
  position: fixed;
  font-size: 2em;
  top: 1em;
  right: 1em;
  padding: 1em;
  border-radius: 50%;
  color: rgb(255, 0, 0);
  background-color: rgba(255, 255, 0, 0.5);
`;
