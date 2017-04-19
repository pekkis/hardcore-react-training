import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid #999;
  padding: ${props => props.plump ? '2em' : '1em'};
  border-radius: ${props => props.plump ? '10px' : '0'};
`;

export default Button;
