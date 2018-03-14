import styled from "styled-components";

export default styled.button`
  border: 5px solid rgba(0, 0, 0, 0.5);
  padding: 1px;
  background-color: rgb(125, 125, 125);
  color: rgb(255, 255, 255);
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover {
    color: rgb(125, 125, 125);
    background-color: rgb(255, 255, 255);
  }

  ${props =>
    props.block &&
    `
    display: block;
    width: 100%;
  `};
`;
