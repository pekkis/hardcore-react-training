import styled, { css } from "styled-components";
import { lighten } from "polished";

export default styled.button`
  font-family: inherit;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 5px;
  padding: 0.25em;
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  cursor: pointer;

  ${props =>
    props.block &&
    css`
      margin-top: 1em;
      display: block;
      width: 100%;
    `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${lighten(0.2, "rgb(0, 0, 0)")};
  }
`;
