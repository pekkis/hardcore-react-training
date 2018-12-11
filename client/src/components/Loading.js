import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loading = ({ className }) => {
  return (
    <div className={className}>
      <FontAwesomeIcon icon="spinner" pulse />
    </div>
  );
};

export default styled(Loading)`
  position: fixed;
  top: 1em;
  right: 1em;
  background-color: rgba(0, 0, 0, 0.5);
  color: rgb(255, 255, 255);
  padding: 1em;
  border-radius: 50%;
`;
