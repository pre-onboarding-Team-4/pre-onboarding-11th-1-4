import React from 'react';
import useTodoForm from './hooks/useTodoForm';

export default function TodoForm({ setTodos }) {
  const { newTodo, handleChange, handleSubmit } = useTodoForm(setTodos);

  return (
    <form onSubmit={handleSubmit} className='fixed bottom-0 w-full'>
      <input
        data-testid='new-todo-input'
        className='w-full p-4 pr-16 text-xl outline-none'
        type='text'
        placeholder='할 일 추가하기'
        name='todo'
        onChange={handleChange}
        value={newTodo}
      />
      <button
        data-testid='new-todo-add-button'
        className='absolute top-[50%] right-4 translate-y-[-50%]'
        type='submit'
      >
        추가
      </button>
    </form>
  );
}
