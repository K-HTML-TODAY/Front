import React from 'react';
import styled from 'styled-components';
import { InputProps, InputTextBoxProps } from './types';

const Input: React.FC<InputProps> = ({ name, register, placeholder, width }) => {
  return (
    <InputTextBox width={width}>
      <StyledInput {...register(name)} placeholder={placeholder} />
    </InputTextBox>
  );
};

export default Input;

const InputTextBox = styled.div<InputTextBoxProps>`
  width: ${(props) => props.width || '16.5rem'};
  height: 2.1875rem;
  border-radius: 1.875rem;
  background: #fff;
  box-shadow: 0px 0px 2px 1px rgba(205, 216, 219, 0.5);
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 1.875rem;
  padding: 0 1rem;
  outline: none;
  box-sizing: border-box;
  color: #a1a1a1;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &::placeholder {
    color: #b2bbd2;
  }
`;
