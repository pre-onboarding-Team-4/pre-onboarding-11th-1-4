import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Todo() {
	const navigate = useNavigate();

	useEffect(() => {
		if (!localStorage.getItem('accessToken')) {
			navigate('/signin');
			toast.info('리다이렉트 되었습니다.');
		}
	}, []);

	return <div>Todo</div>;
}
