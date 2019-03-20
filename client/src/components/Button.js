import styled, { css } from "styled-components";
import { lighten } from "polished";

const Button = styled.button`
  border: 3px solid rgb(0, 0, 0);
  background-color: rgb(66, 66, 66);
  color: rgb(255, 255, 255);
  padding: 1em;
  transition: 0.2s linear all;

  border-radius: ${props => props.theme.borderRadius};

  ${props =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `}

  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    border-radius: 10px;
    background-color: ${lighten(0.3, "rgb(66, 66, 66)")};
  }
`;

export default Button;
