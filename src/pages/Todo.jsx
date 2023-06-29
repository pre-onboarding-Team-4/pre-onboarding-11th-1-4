import React from 'react';
import { styled } from 'styled-components';
import TodoHeader from '../components/TodoHeader';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

export default function Todo() {
  return (
    <Section>
      <TodoHeader />
      <TodoList />
      <TodoForm />
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  margin-bottom: 60px;
  background-color: #f3f4f6;
`;
