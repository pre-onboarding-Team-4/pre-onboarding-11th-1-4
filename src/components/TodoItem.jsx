import React from 'react';
import { styled } from 'styled-components';
import { RiPencilFill } from 'react-icons/ri';
import { BsTrash3 } from 'react-icons/bs';
// import { RiCloseFill, RiPencilFill } from 'react-icons/ri';
// import { BsCheckLg, BsTrash3 } from 'react-icons/bs';

export default function TodoItem() {
  return (
    <Li>
      <Label htmlFor="1">
        <Input id="1" type="checkbox" />
        {/* NOTE: 편집 모드 아닐 때 */}
        <span>할일</span>

        {/* NOTE: 편집 모드 일 때 */}
        {/* <input data-testid="modify-input" type="text" /> */}
      </Label>

      {/* NOTE: 편집 모드 아닐 때 */}
      <Div>
        <Button data-testid="modify-button" type="button" aria-label="수정">
          <RiPencilFill />
        </Button>
        <Button data-testid="delete-button" type="button" aria-label="삭제">
          <BsTrash3 />
        </Button>
      </Div>

      {/* NOTE: 편집 모드 일 때 */}
      {/* <Div>
          <Button data-testid="submit-button" type="button" aria-label="제출">
            <BsCheckLg />
          </Button>
          <Button data-testid="cancel-button" type="button" aria-label="취소">
            <RiCloseFill />
          </Button>
        </Div> */}
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
