import React from 'react';
import { RiPencilFill, RiCloseFill } from 'react-icons/ri';
import { BsTrash3, BsCheckLg } from 'react-icons/bs';
import useTodoItem from './hooks/useTodoItem';

export default function TodoItem({ todo: item, setTodos }) {
  const {
    id,
    isCompleted,
    handleComplete,
    isEditMode,
    todo,
    editedTodo,
    handleTodoChange,
    handleEdit,
    handleDelete,
    handleTodoUpdate,
  } = useTodoItem({ item, setTodos });

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
