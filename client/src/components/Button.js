import styled, { css } from "styled-components";
import { darken } from "polished";

export default styled.button`
  border: 3px solid rgb(0, 0, 0);
  padding: 1em;
  border-radius: 5px;
  cursor: pointer;
  transition: all;
  transition-duration: 0.3s;

  ${props =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `}

  &:hover {
    background-color: ${darken(0.5, "rgb(200, 200, 200)")};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
