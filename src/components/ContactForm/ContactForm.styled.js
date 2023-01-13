import styled from 'styled-components';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 5px 0px;
  width: 100%;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  max-width: 240px;
  padding-left: 5px;
  height: 24px;
  font-size: 14px;
  outline: none;
  border: 2px solid grey;
  border-radius: 3px;
  background-color: transparent;
`;

export const Span = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

export const Button = styled.button`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  gap: 4px;
  height: 28px;
  max-width: 125px;
  font-weight: 700;
  font-size: 14px;
  outline: none;
  border: 1px solid skyblue;
  border-radius: 4px;
  &:hover {
    background-color: skyblue;
  }
`;
