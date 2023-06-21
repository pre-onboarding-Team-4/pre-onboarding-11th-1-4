import React, { useEffect, useReducer } from 'react';
import TodoTemplate from '../components/TodoTemplate';
import TodoList from '../components/TodoList';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TodoForm from '../components/TodoForm';
import { deleteTodo, getTodos } from '../api';

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
      return [];
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
    const { status } = await deleteTodo(id);
    if (status === 204) {
      dispatch({ type: 'DELETE', id });
    }
  };

  useEffect(() => {
    (async () => {
      const { data, status } = await getTodos();

      if (status !== 200) return;

      dispatch({ type: 'GET', todos: data });
    })();
  }, []);

  return (
    <TodoTemplate>
      <Title>Todo List</Title>
      <TodoForm />
      {state.length > 0 && <TodoList todos={state} onDelete={onDelete} />}
      <Logout>
        <span onClick={onLogout}>로그아웃</span>
      </Logout>
    </TodoTemplate>
  );
};

export default Todo;
