import React from 'react';
import { MdClose } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';
import { FaPowerOff } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

export default function Sidebar({ isOpen, handleOpen }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div
      className={`bg-gray-900 text-white w-64 max-w-full h-screen fixed left-0 top-0 overflow-y-auto translate-x-[-100%] ${
        isOpen && 'translate-x-0'
      } transition-transform`}
    >
      <header className='p-4 flex justify-between items-center'>
        <h2 className='text-xl font-bold'>바로가기</h2>
        <button
          onClick={handleOpen}
          className='text-2xl text-white focus:outline-none'
        >
          <span className='sr-only'>닫기</span>
          <MdClose />
        </button>
      </header>
      <nav className='mt-4'>
        <ul>
          <li className='mb-4'>
            <Link
              to='/'
              className='flex items-center px-4 text-xl text-gray-300 hover:text-white'
            >
              <AiFillHome />
              <span className='pl-4'>홈으로</span>
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className='flex items-center px-4 text-xl text-gray-300 hover:text-white'
            >
              <FaPowerOff />
              <span className='pl-4'>로그아웃</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
