import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Spinner = props => {
  const { className } = props;
  return (
    <div className={className}>
      <FontAwesomeIcon icon={["fas", "spinner"]} pulse />
    </div>
  );
};

export default styled(Spinner)`
  position: fixed;
  top: 1em;
  right: 1em;
  padding: 1em;
  background-color: rgba(0, 0, 0, 0.33);
  color: rgb(255, 255, 255);
  font-size: 2em;
  border-radius: 50%;
`;
