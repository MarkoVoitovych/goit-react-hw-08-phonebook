import styled from 'styled-components';
import { Form } from 'formik';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const StyledModal = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

export const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 20px;
  border: 2px solid black;
  width: 480px;
  height: 480px;
  margin: 0 auto;
  background-color: #85ffbd;
  background-image: linear-gradient(45deg, #85ffbd 0%, #fffb7d 100%);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 240px;
  padding-left: 5px;
  height: 24px;
  font-size: 14px;
  outline: none;
  border: 2px solid grey;
  border-radius: 3px;
`;

export const Span = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  padding: 0px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  gap: 4px;
  height: 28px;
  max-width: 125px;
  font-weight: 500;
  font-size: 14px;
  outline: none;
  border: 1px solid skyblue;
  border-radius: 4px;
  &:hover {
    background-color: skyblue;
  }
`;
