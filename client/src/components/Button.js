import styled, { css } from "styled-components";
import { darken } from "polished";

export default styled.button`
  cursor: pointer;
  border-radius: 10px;
  background-color: rgb(100, 100, 100);
  color: ${darken(0.9, "rgb(255, 255, 255)")};
  padding: 0.5em;

  ${props =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `}

  &:hover {
    background-color: rgb(150, 150, 150);
  }

  &:disabled {
    opacity: 0.5;
  }
`;
