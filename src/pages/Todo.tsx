import React, { useEffect, useReducer } from 'react';
import TodoTemplate from '../components/TodoTemplate';
import TodoList from '../components/TodoList';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TodoForm from '../components/TodoForm';
import {
  createTodo,
  deleteTodo,
  getTodos,
  UpdateProps,
  updateTodo,
} from '../api';

const Title = styled.h2`
  font-size: 32px;
  text-align: center;
  margin-bottom: 30px;
  font-weight: 500;
`;

const Logout = styled.div`
  text-align: right;
  margin-top: 30px;
  text-decoration: none;
  font-weight: 400;
  color: rgb(142, 146, 159);
  & > span {
    cursor: pointer;
  }
`;

export type TodoItem = {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
};

function todoReducer(state: TodoItem[], action: any): TodoItem[] {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo,
      );
    case 'UPDATE':
      return state.map(todo =>
        todo.id === action.payload.id ? { ...todo, ...action.payload } : todo,
      );
    case 'GET':
      return [...action.todos];
    case 'DELETE':
      return state.filter(todo => todo.id !== action.id);
    default:
      return [];
  }
}

const Todo = () => {
  const [state, dispatch] = useReducer(todoReducer, []);
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem('access_token');

    navigate('/signin');
  };

  const onDelete = async (id: number) => {
    try {
      const { status } = await deleteTodo(id);

      if (status === 204) {
        dispatch({ type: 'DELETE', id });
      }
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  const onCreate = async (todo: string) => {
    try {
      const { status, data } = await createTodo(todo);

      if (status !== 201) return;

      dispatch({ type: 'CREATE', todo: data });

      refreshTodos();
    } catch (error: any) {
      alert(error.response.data.message.join(''));
    }
  };

  const onToggle = async ({ id, todo, isCompleted }: UpdateProps) => {
    try {
      const { status } = await updateTodo({
        id,
        todo,
        isCompleted: !isCompleted,
      });

      if (status !== 200) return;

      dispatch({ type: 'TOGGLE', id });
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  const onUpdate = async ({ id, todo, isCompleted }: UpdateProps) => {
    dispatch({ type: 'UPDATE', payload: { id, todo, isCompleted } });
    try {
      const { status } = await updateTodo({
        id,
        todo,
        isCompleted,
      });

      if (status !== 200) return;
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  const refreshTodos = async () => {
    try {
      const { data, status } = await getTodos();

      if (status !== 200) return;

      dispatch({ type: 'GET', todos: data });
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  useEffect(() => {
    refreshTodos();
  }, []);

  return (
    <TodoTemplate>
      <Title>Todo List</Title>
      <TodoForm onCreate={onCreate} />
      {state.length > 0 && (
        <TodoList
          todos={state}
          onDelete={onDelete}
          onToggle={onToggle}
          onUpdate={onUpdate}
        />
      )}
      <Logout>
        <span onClick={onLogout}>로그아웃</span>
      </Logout>
    </TodoTemplate>
  );
};

export default Todo;
