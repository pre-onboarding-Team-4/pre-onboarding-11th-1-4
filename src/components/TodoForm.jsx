import React from 'react';
import { styled } from 'styled-components';

export default function TodoForm() {
  return (
    <Form>
      <Input type="text" placeholder="할 일 추가하기" />
      <Button type="button">추가</Button>
    </Form>
  );
}

const Form = styled.form`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 57px;
  background-color: var(--color-white);
`;

const Input = styled.input`
  flex-grow: 1;
  height: 100%;
  padding: 16px;
  border: 0;
  outline: 0;
  box-sizing: border-box;
  &::placeholder {
    color: var(--color-placeholder);
  }
`;

const Button = styled.button`
  flex-shrink: 0;
  width: 62px;
  height: 100%;
  font-weight: 700;
  background-color: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;

  &:disabled {
    color: var(--color-placeholder);
  }
`;
