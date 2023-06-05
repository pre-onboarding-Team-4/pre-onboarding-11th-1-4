import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList() {
  return (
    <ul className='py-16 px-4'>
      <TodoItem />
    </ul>
  );
}
