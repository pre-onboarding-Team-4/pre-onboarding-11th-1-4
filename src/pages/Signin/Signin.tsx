import React, { useState, useEffect } from 'react';
import { UserSignInput } from '../../components/UserSignInput';
import styled from 'styled-components';
import { Button } from '../../components/Button';
import checkValidate from '../../utils/checkValidate';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../common/api/api';
import { toast } from 'react-toastify';

export default function Signin() {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [isValidate, setIsValidate] = useState<boolean>(false);

	const navigate = useNavigate();

	useEffect(() => {
		if (localStorage.getItem('accessToken')) {
			navigate('/todo');
			toast.info('리다이렉트 되었습니다.');
		}
	}, []);

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
		checkValidate(e.target.value, password) ? setIsValidate(true) : setIsValidate(false);
	};

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
		checkValidate(email, e.target.value) ? setIsValidate(true) : setIsValidate(false);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const res = await signIn(email, password);
		if (res?.status === 200) navigate('/todo');
	};

	return (
		<InputContainer onSubmit={handleSubmit} noValidate>
			<span className="signin-title">로그인</span>
			<InputBox>
				<InputText>이메일</InputText>
				<UserSignInput type="email" value={email} onChange={handleEmailChange} data-testid="email-input" />
				{email.length > 0 && !email.includes('@') && <WarnText>이메일을 정확히 입력해주세요.</WarnText>}
			</InputBox>
			<InputBox>
				<InputText>비밀번호</InputText>
				<UserSignInput type="password" value={password} onChange={handlePasswordChange} data-testid="password-input" />
				{password.length > 0 && password.length < 8 && <WarnText>비밀번호를 정확히 입력해주세요.</WarnText>}
			</InputBox>
			<Link className="go-to-signup-btn" to="/signup">
				아직 회원이 아니시라면?
			</Link>
			<Button type="submit" disabled={!isValidate} data-testid="signin-button">
				로그인
			</Button>
		</InputContainer>
	);
}

const InputContainer = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 60vh;
	row-gap: 30px;
	.signin-title {
		font-size: 24px;
	}
	.go-to-signup-btn {
		color: blue;
		cursor: pointer;
	}
`;

const InputBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 500px;
`;

const InputText = styled.p`
	width: 100%;
	margin-bottom: 10px;
`;

const WarnText = styled.p`
	width: 100%;
	margin: 5px 0;
	color: red;
`;
