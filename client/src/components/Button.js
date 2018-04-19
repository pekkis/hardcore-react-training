import styled from "styled-components";
import { lighten, darken } from "polished";

export default styled.button`
  border-radius: 5px;
  border: 3px dotted rgb(33, 33, 33);
  padding: 0.5em;
  color: rgb(255, 255, 255);
  background-color: rgb(0, 0, 0);

  &:hover {
    background-color: ${lighten(0.2, "rgb(0, 0, 0)")};
    color: ${darken(0.2, "rgb(255, 255, 255)")};
  }

  &:disabled {
    opacity: 0.33;
  }

  ${props =>
    props.block &&
    `
    display: block;
    width: 100%;
  `};
`;
