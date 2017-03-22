import styled from 'styled-components';

export default styled.button`
  border-radius: 10px;
  border: 1px solid #999;
  font-family: inherit;
  padding: .5em;
  background-color: ${props => props.happy ? 'yellow' : 'blue'};
  &:hover {
    background-color: #FF0000;
  }
`;
