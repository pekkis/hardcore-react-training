import styled, { css } from "styled-components";

export default styled.button`
  border-radius: 5px;
  border: 5px solid rgb(0, 0, 0);
  padding: 1em;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }

  ${props =>
    props.block &&
    css`
      width: 100%;
      display: block;
      margin-top: 1em;
    `}
`;
