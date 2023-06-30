import React, { useEffect, useReducer } from 'react';
import { styled } from 'styled-components';
import TodoHeader from '../components/TodoHeader';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { createTodo, deleteTodo, getTodoList, updateTodo } from '../apis/todo';
import useToast from '../hooks/useToast';

function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );
    case 'UPDATE':
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
      );
    case 'GET':
      return [...action.todos];
    case 'DELETE':
      return state.filter((todo) => todo.id !== action.id);
    default:
      return [];
  }
}

export default function Todo() {
  const createToast = useToast();
  const [state, dispatch] = useReducer(todoReducer, []);

  const getTodos = async () => {
    try {
      const { todoList, message } = await getTodoList();

      dispatch({ type: 'GET', todos: todoList });
      createToast({ message, type: 'success' });
    } catch (error) {
      createToast({ message: error.message, type: 'warn' });
    }
  };

  const onDelete = async (id) => {
    try {
      const { message } = await deleteTodo(id);

      dispatch({ type: 'DELETE', id });
      createToast({ message, type: 'success' });
    } catch (error) {
      createToast({ message: error.message, type: 'warn' });
    }
  };

  const onCreate = async (todo) => {
    try {
      const { data, message } = await createTodo(todo);

      dispatch({ type: 'CREATE', todo: data });
      createToast({ message, type: 'success' });
    } catch (error) {
      const messages = error.message.split(',');

      createToast({ message: messages.length > 1 ? messages[1] : messages[0], type: 'warn' });
    }
  };

  const onToggle = async ({ id, todo, isCompleted }) => {
    try {
      const { message } = await updateTodo(id, {
        todo,
        isCompleted: !isCompleted,
      });

      createToast({ message, type: 'success' });

      dispatch({ type: 'TOGGLE', id });
    } catch (error) {
      createToast({ message: error.message, type: 'warn' });
    }
  };

  const onUpdate = async ({ id, todo, isCompleted }) => {
    try {
      dispatch({ type: 'UPDATE', payload: { id, todo, isCompleted } });

      const { message } = await updateTodo(id, {
        todo,
        isCompleted,
      });

      createToast({ message, type: 'success' });
    } catch (error) {
      createToast({ message: error.message, type: 'warn' });
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Section>
      <TodoHeader />
      <TodoList todos={state} onDelete={onDelete} onToggle={onToggle} onUpdate={onUpdate} />
      <TodoForm onCreate={onCreate} />
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  min-height: calc(100vh - 60px);
  margin-bottom: 60px;
  background-color: #f3f4f6;
`;
