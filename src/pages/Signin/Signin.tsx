import React from 'react';
import { UserSignInput } from '../../components/UserSignInput';
import styled from 'styled-components';
import { Button } from '../../components/Button';

export default function Signin() {
	return (
		<InputContainer>
			<span className="signin-title">로그인</span>
			<InputBox>
				<InputText>이메일</InputText>
				<UserSignInput type="email" />
			</InputBox>
			<InputBox>
				<InputText>비밀번호</InputText>
				<UserSignInput type="password" />
			</InputBox>
			<Button>로그인</Button>
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
`;

const InputBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 500px;
`;

const InputText = styled.p`
	/* text-align: start; */
	width: 100%;
	margin-bottom: 10px;
`;
