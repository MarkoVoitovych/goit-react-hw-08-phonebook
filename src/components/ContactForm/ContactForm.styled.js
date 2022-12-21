import styled from 'styled-components';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  border: 2px solid black;
  max-width: 480px;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  max-width: 240px;
  height: 24px;
  font-size: 16px;
  outline-color: skyblue;
`;

export const Span = styled.span`
  padding-bottom: 10px;
`;

export const Button = styled.button`
  max-width: 110px;
  height: 24px;
  font-weight: 600;
  font-size: 14px;
  outline: none;
  border: 1px solid skyblue;
  border-radius: 4px;
`;
