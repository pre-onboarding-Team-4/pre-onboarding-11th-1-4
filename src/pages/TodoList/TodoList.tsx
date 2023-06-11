import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getTodos, createTodo } from '../../common/api/api';
import TodoDTO from '../../types/TodoDTO';
import { Todo } from '../../components/Todo';
import styled from 'styled-components';
import { UserSignInput } from '../../components/UserSignInput';
import { ActionButton } from '../../components/ActionButton';

export default function TodoList() {
	const [todos, setTodos] = useState<TodoDTO[]>([]);
	const [todoInput, setTodoInput] = useState<string>('');

	const navigate = useNavigate();

	const getTodoList = async (): Promise<void> => {
		const res = await getTodos();
		setTodos(res?.data);
	};

	const handleTodoInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTodoInput(e.target.value);
	};

	const handleCreateTodo = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (todoInput.length > 0) {
			const res = await createTodo(todoInput);
			setTodos([...todos, res?.data]);
			setTodoInput('');
			getTodoList();
		}
	};

	useEffect(() => {
		if (!localStorage.getItem('accessToken')) {
			navigate('/signin');
			toast.info('리다이렉트 되었습니다.');
		}
		getTodoList();
	}, []);

	return (
		<Container>
			<TodoContainer>
				<span className="todo-title">TODOLIST</span>
				<InputContainer onSubmit={handleCreateTodo}>
					<UserSignInput
						className="todo-create-input"
						onChange={handleTodoInput}
						value={todoInput}
						type="text"
						data-testid="new-todo-input"
					/>
					<ActionButton style={{ backgroundColor: '#a5d5f8' }} type="submit" data-testid="new-todo-add-button">
						추가
					</ActionButton>
				</InputContainer>
				{todos?.map((todo) => {
					return <Todo todo={todo} refreshList={getTodoList} />;
				})}
			</TodoContainer>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 60vh;
`;

const TodoContainer = styled.ul`
	min-height: 500px;
	width: 1000px;
	border: 1px solid;
	margin: 0 auto;
	border-radius: 4px;
	.todo-title {
		font-size: 20px;
		display: flex;
		justify-content: center;
		margin: 20px 0;
	}
`;

const InputContainer = styled.form`
	display: flex;
	justify-content: center;
	width: 100%;
	align-items: center;
	gap: 5px;
	.todo-create-input {
		display: flex;
		justify-content: center;
	}
`;
