/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { styled } from 'styled-components';
import { RiCloseFill, RiPencilFill } from 'react-icons/ri';
import { BsCheckLg, BsTrash3 } from 'react-icons/bs';

export default function TodoItem({ todo, onDelete, onToggle, onUpdate }) {
  const { id, todo: text, isCompleted } = todo;

  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState(text || '');

  const onCancle = () => {
    setEditText(text || '');
    setIsEdit(false);
  };

  const onEdit = () => {
    setIsEdit(false);
    onUpdate({ id, todo: editText, isCompleted });
  };

  return (
    <Li>
      <Label htmlFor={id}>
        <Input
          id={id}
          type="checkbox"
          checked={isCompleted}
          onChange={() => {
            onToggle(todo);
          }}
        />
        {!isEdit ? (
          <span>{text}</span>
        ) : (
          <input
            data-testid="modify-input"
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        )}
      </Label>

      {!isEdit ? (
        <Div>
          <Button
            data-testid="modify-button"
            type="button"
            aria-label="수정"
            onClick={() => {
              setIsEdit(true);
            }}
          >
            <RiPencilFill />
          </Button>
          <Button
            data-testid="delete-button"
            type="button"
            aria-label="삭제"
            onClick={() => {
              onDelete(id);
            }}
          >
            <BsTrash3 />
          </Button>
        </Div>
      ) : (
        <Div>
          <Button data-testid="submit-button" type="button" aria-label="제출" onClick={onEdit}>
            <BsCheckLg />
          </Button>
          <Button data-testid="cancel-button" type="button" aria-label="취소" onClick={onCancle}>
            <RiCloseFill />
          </Button>
        </Div>
      )}
    </Li>
  );
}

const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 44px;
  margin-bottom: 8px;
  font-size: 22px;
`;

const Label = styled.label`
  flex-grow: 1;
`;

const Input = styled.input`
  margin-right: 8px;
  accent-color: var(--color-primary);
`;

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 22px;
  color: var(--color-placeholder);
  background-color: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;

  &:hover {
    color: var(--color-black);
  }
`;
