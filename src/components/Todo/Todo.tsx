import React, { useState } from 'react';
import TodoDTO from '../../types/TodoDTO';
import styled from 'styled-components';
import { ActionButton } from '../ActionButton';
import { updateTodo, deleteTodo } from '../../common/api/api';

type TodoProps = {
	todo: TodoDTO;
	refreshList: () => Promise<void>;
};

export default function Todo({ todo, refreshList }: TodoProps) {
	const [checked, setChecked] = useState<boolean>(todo.isCompleted);

	const handleCheckBox = async () => {
		await updateTodo({ ...todo, isCompleted: !checked });
		setChecked(!checked);
	};

	const handleDeleteTodo = async () => {
		await deleteTodo(todo.id);
		refreshList();
	};

	return (
		<TodoElement>
			<label>
				<input type="checkbox" checked={checked} onChange={handleCheckBox} />
				<span>{todo.todo}</span>
			</label>
			<ButtonContainer>
				<ActionButton style={{ backgroundColor: '#6be675' }}>수정</ActionButton>
				<ActionButton style={{ backgroundColor: '#e66b6b' }} onClick={handleDeleteTodo}>
					삭제
				</ActionButton>
			</ButtonContainer>
		</TodoElement>
	);
}

const TodoElement = styled.li`
	margin: 20px 40px;
	display: flex;
	justify-content: space-between;
`;

const ButtonContainer = styled.div`
	display: flex;
	gap: 5px;
`;
