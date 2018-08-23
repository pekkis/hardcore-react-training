import styled from "styled-components";

export default styled.button`
  border: 3px solid rgb(0, 0, 0);
  background-color: rgb(10, 10, 10);
  padding: 3px;
  color: rgb(255, 255, 255);
  cursor: pointer;

  ${props =>
    props.block && `display: block; width: 100%;`} /* pysy */

  &:hover {
    background-color: rgb(99, 99, 99);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
