import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, setTodos }) {
  return (
    <ul className='py-16 px-4'>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} setTodos={setTodos} />
      ))}
    </ul>
  );
}
