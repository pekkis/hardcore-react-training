import styled, { css } from "styled-components";

const Button = styled.button`
  padding: 1em;
  border: 5px solid rgb(0, 0, 0);
  background-color: rgb(33, 33, 33);
  color: rgb(255, 255, 255);
  cursor: pointer;

  &:hover {
    background-color: rgb(55, 55, 55);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${props =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `}
`;

export default Button;
