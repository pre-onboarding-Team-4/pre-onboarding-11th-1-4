import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getTodos } from '../../common/api/api';
import TodoDTO from '../../types/TodoDTO';
import { Todo } from '../../components/Todo';
import styled from 'styled-components';

export default function TodoList() {
	const [todos, setTodos] = useState<TodoDTO[]>([]);

	const navigate = useNavigate();

	const getTodoList = async () => {
		const res = await getTodos();
		setTodos(res?.data);
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
				{todos?.map((todo) => {
					return <Todo todo={todo} />;
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
`;
