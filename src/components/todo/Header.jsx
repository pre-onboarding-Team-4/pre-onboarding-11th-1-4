import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Header({ handleOpen }) {
  return (
    <header className='fixed top-0 left-0 right-0 flex items-center justify-center p-2 bg-purple-400'>
      <h1 className='text-2xl font-bold'>To do List</h1>
      <button
        onClick={handleOpen}
        className='absolute left-4 text-2xl'
        type='button'
      >
        <GiHamburgerMenu />
      </button>
    </header>
  );
}
