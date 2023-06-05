import React from 'react';
import { RiPencilFill, RiCloseFill } from 'react-icons/ri';
import { BsTrash3, BsCheckLg } from 'react-icons/bs';

export default function TodoItem() {
  return (
    <li className='flex items-center justify-between mb-2 text-2xl'>
      <label htmlFor='test1' className='flex items-center flex-grow'>
        <input id='test1' type='checkbox' />
        <span className='pl-4 w-full'>할 일 목록</span>
        {/* <input
          data-testid='modify-input'
          className='w-full p-2 mx-2 bg-transparent border-b border-blue-400 outline-none'
          type='text'
        /> */}
      </label>

      <div className='text-gray-500'>
        <button
          data-testid='modify-button'
          className='mr-4 hover:text-blue-600'
          type='button'
        >
          <span className='sr-only'>수정</span>
          <RiPencilFill />
        </button>
        <button
          data-testid='delete-button'
          className='hover:text-red-600'
          type='button'
        >
          <span className='sr-only'>삭제</span>
          <BsTrash3 />
        </button>
      </div>

      {/* <div className='text-gray-500'>
        <button
          data-testid='submit-button'
          className='mr-4 hover:text-blue-600'
          type='button'
        >
          <span className='sr-only'>제출</span>
          <BsCheckLg />
        </button>
        <button
          data-testid='cancel-button'
          className='hover:text-red-600'
          type='button'
        >
          <span className='sr-only'>취소</span>
          <RiCloseFill />
        </button>
      </div> */}
    </li>
  );
}
