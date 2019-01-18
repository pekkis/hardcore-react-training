import styled from "styled-components";

const Button = styled.button`
  border: 5px solid rgb(0, 0, 0);
  padding: 3px;
  cursor: pointer;

  ${props =>
    props.block &&
    `
    width: 100%;
    display: block;
  `}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export default Button;
