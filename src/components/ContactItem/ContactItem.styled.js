import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  display: flex;
  gap: 5px;
  align-items: center;
  font-size: 15px;
  font-weight: 500;
`;

export const Button = styled.button`
  max-width: 80px;
  height: 24px;
  font-weight: 500;
  font-size: 14px;
  outline: none;
  border: 1px solid skyblue;
  border-radius: 4px;
  margin-left: 15px;
  padding: 0px 10px;
  &:hover {
    background-color: skyblue;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
`;
