import React from 'react';
import TodoTemplate from '../components/TodoTemplate';
import TodoList from '../components/TodoList';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TodoForm from '../components/TodoForm';

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

const Todo = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem('access_token');

    navigate('/signin');
  };

  return (
    <TodoTemplate>
      <Title>Todo List</Title>
      <TodoForm />
      <TodoList />
      <Logout>
        <span onClick={onLogout}>로그아웃</span>
      </Logout>
    </TodoTemplate>
  );
};

export default Todo;
