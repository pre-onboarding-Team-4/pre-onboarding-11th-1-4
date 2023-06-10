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
	const [onEdit, setOnEdit] = useState<boolean>(false);
	const [editInput, setEditInput] = useState<string>(todo.todo);

	const handleCheckBox = async () => {
		await updateTodo({ ...todo, isCompleted: !checked });
		setChecked(!checked);
	};

	const handleDeleteTodo = async () => {
		await deleteTodo(todo.id);
		refreshList();
	};

	const handleEditTodo = async () => {
		await updateTodo({ ...todo, todo: editInput });
		setOnEdit(false);
		refreshList();
	};

	const handleEditInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditInput(e.target.value);
	};

	return (
		<TodoElement>
			<label>
				<input type="checkbox" checked={checked} onChange={handleCheckBox} />
				{onEdit ? (
					<EditInput type="text" value={editInput} onChange={handleEditInput} data-testid="modify-input" />
				) : (
					<span>{todo.todo}</span>
				)}
			</label>
			{onEdit ? (
				<ButtonContainer>
					<ActionButton style={{ backgroundColor: '#6be675' }} onClick={handleEditTodo} data-testid="submit-button">
						제출
					</ActionButton>
					<ActionButton
						style={{ backgroundColor: '#e66b6b' }}
						onClick={() => {
							setOnEdit(false);
						}}
						data-testid="cancel-button"
					>
						취소
					</ActionButton>
				</ButtonContainer>
			) : (
				<ButtonContainer>
					<ActionButton
						style={{ backgroundColor: '#6be675' }}
						onClick={() => {
							setOnEdit(true);
						}}
						data-testid="modify-button"
					>
						수정
					</ActionButton>
					<ActionButton style={{ backgroundColor: '#e66b6b' }} onClick={handleDeleteTodo} data-testid="delete-button">
						삭제
					</ActionButton>
				</ButtonContainer>
			)}
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

const EditInput = styled.input`
	border: none;
	border-bottom: 1px solid #333;
	height: 20px;
	width: 300px;
`;
