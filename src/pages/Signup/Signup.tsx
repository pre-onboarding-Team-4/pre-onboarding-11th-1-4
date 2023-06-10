import React, { useState } from 'react';
import { UserSignInput } from '../../components/UserSignInput';
import styled from 'styled-components';
import { Button } from '../../components/Button';
import checkValidate from '../../utils/checkValidate';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../common/api/api';

export default function Signup() {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [isValidate, setIsValidate] = useState<boolean>(false);

	const navigate = useNavigate();

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
		const res = await signUp(email, password);
		if (res?.status === 201) navigate('/signin');
	};

	return (
		<InputContainer onSubmit={handleSubmit} noValidate>
			<span className="Signup-title">회원가입</span>
			<InputBox>
				<InputText>이메일</InputText>
				<UserSignInput type="email" value={email} onChange={handleEmailChange} />
				{email.length > 0 && !email.includes('@') && <WarnText>이메일을 정확히 입력해주세요.</WarnText>}
			</InputBox>
			<InputBox>
				<InputText>비밀번호</InputText>
				<UserSignInput type="password" value={password} onChange={handlePasswordChange} />
				{password.length > 0 && password.length < 8 && <WarnText>비밀번호를 정확히 입력해주세요.</WarnText>}
			</InputBox>
			<Button type="submit" disabled={!isValidate}>
				회원가입
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
	.Signup-title {
		font-size: 24px;
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
