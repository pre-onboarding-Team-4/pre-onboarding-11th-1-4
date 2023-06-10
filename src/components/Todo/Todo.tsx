import React from 'react';
import TodoDTO from '../../types/TodoDTO';
import styled from 'styled-components';

type TodoProps = {
	todo: TodoDTO;
};

export default function Todo({ todo }: TodoProps) {
	return (
		<TodoElement>
			<label>
				<input type="checkbox" checked={todo.isCompleted} />
				<span>{todo.todo}</span>
			</label>
			<ButtonContainer>
				<ActionButton style={{ backgroundColor: '#6be675' }}>수정</ActionButton>
				<ActionButton style={{ backgroundColor: '#e66b6b' }}>삭제</ActionButton>
			</ButtonContainer>
		</TodoElement>
	);
}

const TodoElement = styled.li`
	margin: 20px 40px;
	display: flex;
	justify-content: space-between;
`;
const ActionButton = styled.button`
	width: 50px;
	height: 20px;
	border-radius: 4px;
	border: none;
	cursor: pointer;
`;

const ButtonContainer = styled.div`
	display: flex;
	gap: 5px;
`;
