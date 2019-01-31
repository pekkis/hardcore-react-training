import styled, { css } from "styled-components";

const Button = styled.button`
  border: 5px solid rgb(0, 0, 0);
  border-radius: 5px;
  padding: 1em;
  cursor: pointer;

  ${props =>
    props.block &&
    css`
      width: 100%;
      display: block;
    `}

  &:hover {
    font-weight: bold;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export default Button;
