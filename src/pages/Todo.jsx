import React from 'react';
import Header from '../components/todo/Header';
import TodoList from '../components/todo/TodoList';
import TodoForm from '../components/todo/TodoForm';
import Sidebar from '../components/todo/Sidebar';
import useTodo from '../components/todo/hooks/useTodo';

export default function Todo() {
  const { handleOpen, todos, setTodos, isOpen } = useTodo();

  return (
    <section className='w-full h-screen'>
      <Header handleOpen={handleOpen} />
      <TodoList todos={todos} setTodos={setTodos} />
      <TodoForm setTodos={setTodos} />
      <Sidebar isOpen={isOpen} handleOpen={handleOpen} />
    </section>
  );
}
