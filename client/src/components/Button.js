import styled from "styled-components";

export default styled.button`
  border-radius: 5px;
  border: 2px solid rgb(0, 255, 0);
  background-color: rgb(255, 0, 0);
  color: rgb(0, 0, 255);

  ${props => props.block && `
    display: block;
    width: 100%;
  `}

  &:hover {
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
  }

`;
