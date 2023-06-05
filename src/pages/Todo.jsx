import React, { useEffect, useState } from 'react';
import Header from '../components/todo/Header';
import TodoList from '../components/todo/TodoList';
import TodoForm from '../components/todo/TodoForm';
import Sidebar from '../components/todo/Sidebar';
import { useNavigate } from 'react-router-dom';

export default function Todo() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    !localStorage.getItem('token') && navigate('/signin');
  }, [navigate]);

  return (
    <section className='w-full h-screen'>
      <Header handleOpen={handleOpen} />
      <TodoList />
      <TodoForm />
      <Sidebar isOpen={isOpen} handleOpen={handleOpen} />
    </section>
  );
}
