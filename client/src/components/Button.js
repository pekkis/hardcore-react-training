import styled from "styled-components";

export default styled.button`
  border: 5px solid rgb(255, 0, 255);
  padding: 5px;
  ${props => props.block && `display: block; width: 100%;`};
`;
