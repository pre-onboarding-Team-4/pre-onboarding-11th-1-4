import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <section className='text-center'>
      <h1 className='mb-4 text-2xl'>Not Found</h1>
      <p className='mb-4'>찾을 수 없는 페이지입니다.</p>
      <button
        className='flex items-center justify-center w-full p-2 border border-black rounded-3xl hover:text-white hover:bg-black '
        type='button'
        onClick={() => navigate('/')}
      >
        홈으로
      </button>
    </section>
  );
}
