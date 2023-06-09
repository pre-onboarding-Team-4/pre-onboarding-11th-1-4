import React, { useState } from 'react';
import { RiPencilFill, RiCloseFill } from 'react-icons/ri';
import { BsTrash3, BsCheckLg } from 'react-icons/bs';
import { deleteTodoApi, updateTodoApi } from '../../api/todos';

export default function TodoItem({
  todo: { id, todo, isCompleted },
  setTodos,
}) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);

  const handleComplete = async () => {
    const body = {
      todo,
      isCompleted: !isCompleted,
    };

    const res = await updateTodoApi(id, body);
    if (res.status !== 200) return;

    setTodos(prev =>
      prev.map(todo => (todo.id === res.data.id ? res.data : todo))
    );
  };

  const handleEdit = state => {
    if (!state) {
      setEditedTodo(todo);
    }
    setIsEditMode(state);
  };

  const handleTodoChange = e => {
    setEditedTodo(e.target.value);
  };

  const handleTodoUpdate = async () => {
    const body = {
      todo: editedTodo,
      isCompleted,
    };

    try {
      const res = await updateTodoApi(id, body);
      if (res.status !== 200) {
        alert('수정 실패');
      }

      setTodos(prev =>
        prev.map(todo => (todo.id === res.data.id ? res.data : todo))
      );
      setIsEditMode(false);
    } catch (error) {
      console.error(error);
      alert('수정 실패');
    }
  };

  const handleDelete = async () => {
    try {
      const res = await deleteTodoApi(id);
      if (res.status !== 204) {
        alert('삭제 실패');
      }
      setTodos(prev => prev.filter(todo => todo.id !== id));
    } catch (error) {
      console.error(error);
      alert('에러 발생');
    }
  };

  return (
    <li className='flex items-center justify-between mb-2 text-2xl'>
      <label htmlFor={id} className='flex items-center flex-grow'>
        <input
          id={id}
          type='checkbox'
          checked={isCompleted}
          onChange={handleComplete}
        />
        {!isEditMode && <span className='pl-4 w-full'>{todo}</span>}
        {isEditMode && (
          <input
            data-testid='modify-input'
            className='w-full p-2 mx-2 bg-transparent border-b border-blue-400 outline-none'
            type='text'
            value={editedTodo}
            onChange={handleTodoChange}
          />
        )}
      </label>

      {!isEditMode && (
        <div className='text-gray-500'>
          <button
            data-testid='modify-button'
            className='mr-4 hover:text-blue-600'
            type='button'
            onClick={() => {
              handleEdit(true);
            }}
          >
            <span className='sr-only'>수정</span>
            <RiPencilFill />
          </button>
          <button
            data-testid='delete-button'
            className='hover:text-red-600'
            type='button'
            onClick={handleDelete}
          >
            <span className='sr-only'>삭제</span>
            <BsTrash3 />
          </button>
        </div>
      )}

      {isEditMode && (
        <div className='text-gray-500'>
          <button
            data-testid='submit-button'
            className='mr-4 hover:text-blue-600'
            type='button'
            onClick={handleTodoUpdate}
          >
            <span className='sr-only'>제출</span>
            <BsCheckLg />
          </button>
          <button
            data-testid='cancel-button'
            className='hover:text-red-600'
            type='button'
            onClick={() => {
              handleEdit(false);
            }}
          >
            <span className='sr-only'>취소</span>
            <RiCloseFill />
          </button>
        </div>
      )}
    </li>
  );
}
