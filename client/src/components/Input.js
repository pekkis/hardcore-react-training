import styled, { css } from "styled-components";
import { lighten } from "polished";

export default styled.input`
  border: 1px solid rgb(200, 200, 200);
  border-radius: 5px;
  padding: 0.25em;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);

  ${props =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `}

  &:disabled {
    opacity: 0.5;
  }
`;
