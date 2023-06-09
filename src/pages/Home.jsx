import React from 'react';
import Button from '../components/common/Button';
import useHome from '../hooks/useHome';

export default function Home() {
  const { navigate, isLoggedIn, handleLogout } = useHome();

  return (
    <section className='flex flex-col'>
      <h1 className='text-4xl font-bold mb-8'>To Do List</h1>
      {!isLoggedIn && (
        <>
          <Button
            text='회원가입'
            bgColor='bg-blue-500 hover:bg-blue-700'
            custom='mb-4'
            onClick={() => navigate('signup')}
          />
          <Button
            text='로그인'
            bgColor='bg-red-500 hover:bg-red-700'
            onClick={() => navigate('signin')}
          />
        </>
      )}
      {isLoggedIn && (
        <>
          <Button
            text='나의 투두 리스트'
            bgColor='bg-purple-600 hover:bg-purple-700'
            custom='mb-4'
            onClick={() => navigate('todo')}
          />
          <Button
            text='로그아웃'
            bgColor='bg-red-600 hover:bg-red-700'
            onClick={handleLogout}
          />
        </>
      )}
    </section>
  );
}
