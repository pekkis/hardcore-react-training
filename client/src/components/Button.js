import styled from "styled-components";

export default styled.button`
  border: 5px dashed rgb(0, 0, 0);
  padding: 1em;
  border-radius: 5px;
  color: rgb(0, 0, 0);
  cursor: pointer;

  &:disabled {
    opacity: 0.25;
    cursor: not-allowed;
  }

  ${props =>
    props.block &&
    `
    margin-top: 1em;
    display: block;
    width: 100%;
  `} &:hover {
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
  }
`;
