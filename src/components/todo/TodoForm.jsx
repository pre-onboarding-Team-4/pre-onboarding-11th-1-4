import React, { useState } from 'react';
import { createTodoApi } from '../../api/todos';

export default function TodoForm({ setTodos }) {
  const [newTodo, setNewTodo] = useState('');

  const handleChange = e => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const body = {
      todo: newTodo,
    };

    try {
      const res = await createTodoApi(body);
      if (res.status !== 201) {
        alert('할 일 추가에 실패했습니다.');
        return;
      }

      setTodos(prev => [...prev, res.data]);
    } catch (error) {
      console.error(error);
      alert('에러가 발생했습니다.');
    } finally {
      setNewTodo('');
    }
  };

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
