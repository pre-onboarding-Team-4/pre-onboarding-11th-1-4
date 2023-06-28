import React, { useState } from 'react';
import styled from 'styled-components';
import { UpdateProps } from '../api';

const Item = styled.li`
  display: flex;
  & + & {
    margin-top: 12px;
  }

  & > form {
    display: flex;
    justify-content: space-between;
    flex: 1;
    gap: 0 20px;

    & > label {
      display: flex;
      gap: 0 10px;
      align-items: center;

      & > input[type='checkbox'] {
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

        &:last-child {
          background: #db4455;
        }
      }
    }
  }
`;

type TodoItemProps = {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
  onDelete: (id: number) => void;
  onToggle: (data: UpdateProps) => void;
  onUpdate: (data: UpdateProps) => void;
};

const TodoItem = ({
  id,
  todo,
  isCompleted,
  userId,
  onDelete,
  onToggle,
  onUpdate,
}: TodoItemProps) => {
  const [editTodo, setEditTodo] = useState(todo || '');
  const [isEdit, setIsEdit] = useState(false);

  const onCancle = () => {
    setEditTodo(todo || '');
    setIsEdit(false);
  };

  const onSubmit = async (e: any, data: UpdateProps) => {
    e.preventDefault();

    setIsEdit(false);
    onUpdate(data);
  };

  return (
    <Item>
      <form
        onSubmit={e => {
          onSubmit(e, { id, todo, isCompleted });
          setIsEdit(false);
        }}
      >
        <label>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => {
              onToggle({ id, todo, isCompleted });
            }}
          />
          {isEdit ? (
            <input
              type="text"
              data-testid="modify-input"
              value={editTodo}
              onChange={e => setEditTodo(e.target.value)}
            />
          ) : (
            <span>{todo}</span>
          )}
        </label>
        <div className="btn-container">
          {isEdit ? (
            <button
              data-testid="submit-button"
              type="button"
              onClick={e => {
                onSubmit(e, { id, todo: editTodo, isCompleted });
              }}
            >
              제출
            </button>
          ) : (
            <button
              type="button"
              data-testid="modify-button"
              onClick={e => {
                setIsEdit(true);
              }}
            >
              수정
            </button>
          )}
          {isEdit ? (
            <button
              data-testid="cancel-button"
              type="button"
              onClick={onCancle}
            >
              취소
            </button>
          ) : (
            <button
              data-testid="delete-button"
              type="button"
              onClick={() => {
                onDelete(id);
              }}
            >
              삭제
            </button>
          )}
        </div>
      </form>
    </Item>
  );
};

export default TodoItem;
