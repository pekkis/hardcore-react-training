import React from "react";
import Icon from "react-fa";
import styled from "styled-components";

const Loading = ({ className }) => {
  return (
    <div className={className}>
      <Icon name="spinner" spin />
    </div>
  );
};

export default styled(Loading)`
  position: fixed;
  top: 1em;
  right: 1em;
  font-size: 2rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: rgb(255, 255, 255);
  padding: 1em;
  border-radius: 50%;
`;
