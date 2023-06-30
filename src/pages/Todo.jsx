import React, { useEffect, useReducer } from 'react';
import { styled } from 'styled-components';
import TodoHeader from '../components/TodoHeader';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import apis from '../testApi';

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
  const [state, dispatch] = useReducer(todoReducer, []);

  const getTodos = async () => {
    const todos = await apis.fetchTodos();

    dispatch({ type: 'GET', todos });
  };

  const onDelete = async (id) => {
    dispatch({ type: 'DELETE', id });

    await apis.deleteTodo(id);
  };

  const onCreate = async (todo) => {
    const text = await apis.createTodo(todo);

    dispatch({ type: 'CREATE', todo: text });
  };

  const onToggle = async ({ id, todo, isCompleted }) => {
    dispatch({ type: 'TOGGLE', id });

    await apis.updateTodo({
      id,
      todo,
      isCompleted: !isCompleted,
    });
  };

  const onUpdate = async ({ id, todo, isCompleted }) => {
    dispatch({ type: 'UPDATE', payload: { id, todo, isCompleted } });

    await apis.updateTodo({
      id,
      todo,
      isCompleted,
    });
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
  min-height: 100vh;
  margin-bottom: 60px;
  background-color: #f3f4f6;
`;
