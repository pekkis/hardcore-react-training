import styled from "styled-components";

const Button = styled.button`
  border-radius: 10px;
  border: 3px solid #000000;
  padding: .33em;
  background-color: rgb(33, 33, 33);
  color: rgb(200, 200, 200);

  &:disabled {
    opacity: .2;
    cursor: not-allowed;
  }

  &:hover {
    color: rgb(33, 33, 33);
    background-color: rgb(200, 200, 200);
  }

  ${props =>
    props.block &&
    `
    display: block;
    width: 100%;
  `};
`;

export default Button;
