import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  justify-content: space-between;

  & > label {
    display: flex;
    gap: 0 10px;
    align-items: center;

    & > input {
      width: 20px;
      height: 20px;
    }
  }

  & .btn-container {
    display: flex;
    gap: 0 10px;
    & > button {
      width: 50px;
      height: 35px;
      border-radius: 4px;
      outline: none;
      background: none;
      border: none;
      color: #fff;
      background: rgb(0, 98, 231);
      cursor: pointer;

      &.delete {
        background: #db4455;
      }
    }
  }
`;

const TodoItem = () => {
  return (
    <Item>
      <label>
        <input type="checkbox" />
        <span>TODO 1</span>
      </label>
      <div className="btn-container">
        <button data-testid="modify-button">수정</button>
        <button className="delete" data-testid="delete-button">
          삭제
        </button>
      </div>
    </Item>
  );
};

export default TodoItem;
