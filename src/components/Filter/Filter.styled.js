import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  max-width: 240px;
  height: 24px;
  font-size: 14px;

  outline: none;
  border-radius: 3px;
  border: 2px solid grey;
`;

export const Span = styled.span`
  font-size: 16px;
  font-weight: 500;
`;
