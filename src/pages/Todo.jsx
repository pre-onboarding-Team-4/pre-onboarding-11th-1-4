import React, { useEffect, useState } from 'react';
import Header from '../components/todo/Header';
import TodoList from '../components/todo/TodoList';
import TodoForm from '../components/todo/TodoForm';
import Sidebar from '../components/todo/Sidebar';
import { useNavigate } from 'react-router-dom';
import { getTodosApi } from '../api/todos';

export default function Todo() {
  const [isOpen, setIsOpen] = useState(false);
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  const handleOpen = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    !localStorage.getItem('token') && navigate('/signin');
  }, [navigate]);

  useEffect(() => {
    const dataFetch = async () => {
      const res = await getTodosApi();

      if (res.status !== 200) {
        return;
      }

      setTodos(res.data);
    };

    dataFetch();
  }, []);

  return (
    <section className='w-full h-screen'>
      <Header handleOpen={handleOpen} />
      <TodoList todos={todos} setTodos={setTodos} />
      <TodoForm setTodos={setTodos} />
      <Sidebar isOpen={isOpen} handleOpen={handleOpen} />
    </section>
  );
}
