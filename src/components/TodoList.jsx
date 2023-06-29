import React from 'react';
import { styled } from 'styled-components';
import TodoItem from './TodoItem';

export default function TodoList() {
  return (
    <Ul>
      <TodoItem />
    </Ul>
  );
}

const Ul = styled.ul`
  padding: 18px 16px;
  margin: 0;
  list-style: none;
`;
