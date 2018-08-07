import styled from "styled-components";

export default styled.button`
  border: 3px solid rgb(0, 0, 0);
  padding: 5px;
  font-size: inherit;
  border-radius: 3px;

  &:hover {
    background-color: rgb(255, 0, 0);
    color: rgb(255, 255, 255);
  }

  &:disabled {
    opacity: 0.5;
  }

  ${props =>
    props.block &&
    `
    display: block;
    width: 100%;
    `};
`;
