import styled, { css } from "styled-components";
import polished from "polished";

export default styled.button`
  border-radius: 5px;
  padding: 1em;
  background-color: rgb(200, 200, 200);

  &:hover {
    background-color: rgb(222, 222, 222);
  }

  ${props =>
    props.block &&
    css`
      display: block;
      width: 100%;

      &:hover {
        background-color: rgb(255, 0, 0);
      }
    `}
`;
