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
  font-size: 3em;
  position: fixed;
  top: 1em;
  right: 1em;
  padding: 0.33em;

  color: rgb(255, 255, 255);
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
`;
