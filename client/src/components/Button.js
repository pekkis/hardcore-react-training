import styled, { css } from "styled-components";

export default styled.button`
  border-radius: 5px;
  padding: 1em;

  &:disabled {
    opacity: 0.5;
  }

  ${props =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `}
`;
