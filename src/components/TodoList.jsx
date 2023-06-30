/* eslint-disable react/prop-types */
import React from 'react';
import { styled } from 'styled-components';
import TodoItem from './TodoItem';

export default function TodoList({ todos, onDelete, onToggle, onUpdate }) {
  return (
    <Ul>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
          onUpdate={onUpdate}
          key={todo.id}
        />
      ))}
    </Ul>
  );
}

const Ul = styled.ul`
  padding: 18px 16px;
  margin: 0;
  list-style: none;
`;
