import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  max-width: 480px;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  max-width: 240px;
  height: 24px;
  font-size: 16px;
  outline: none;
  border: 1px solid grey;
  border-radius: 3px;
  padding: 5px;
`;

export const Span = styled.span``;

export const Button = styled.button`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  max-width: 125px;
  font-weight: 700;
  font-size: 14px;
  outline: none;
  border: 1px solid grey;
  border-radius: 4px;
  &:hover {
    background-color: skyblue;
  }
`;
