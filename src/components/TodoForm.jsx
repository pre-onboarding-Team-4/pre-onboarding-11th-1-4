import React, { useState } from 'react';
import { styled } from 'styled-components';

// eslint-disable-next-line react/prop-types
export default function TodoForm({ onCreate }) {
  const [todo, setTodo] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (todo.trim().length === 0) return;

    onCreate(todo);
    setTodo('');
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        placeholder="할 일 추가하기"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button type="button" onClick={onSubmit}>
        추가
      </Button>
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
