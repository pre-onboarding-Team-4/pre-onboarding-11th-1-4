import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  margin-bottom: 20px;
  & .field {
    display: flex;
    gap: 0 20px;
    margin-top: 32px;

    & > input,
    & > button {
      height: 40px;
      font-size: 18px;
      border-radius: 4px;
    }

    & > input {
      outline: none;
      border: none;
      border: 1px solid #ccc;
      padding-left: 10px;
    }

    & > button {
      width: 80px;
      outline: none;
      background: none;
      border: none;
      color: #fff;
      background: rgb(0, 98, 231);
      cursor: pointer;
    }
  }
`;

const TodoForm = () => {
  return (
    <Form>
      <div className="field">
        <input data-testid="new-todo-input" />
        <button data-testid="new-todo-add-button">추가</button>
      </div>
    </Form>
  );
};

export default TodoForm;
