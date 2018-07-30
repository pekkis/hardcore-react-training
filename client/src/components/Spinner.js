import React from "react";
import Icon from "react-fa";
// import styles from "./Spinner.pcss";
import styled from "styled-components";

const Spinner = props => {
  const { className } = props;
  return (
    <div className={className}>
      <Icon name="spinner" spin />
    </div>
  );
};

export default styled(Spinner)`
  position: fixed;
  right: 1em;
  top: 1em;
  background-color: rgba(200, 200, 200, 0.5);
  padding: 1em;
  border-radius: 50%;
`;
