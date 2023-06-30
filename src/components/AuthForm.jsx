import React, { useMemo, useState } from 'react';
import { styled } from 'styled-components';

function AuthForm({ type, onClick }) {
  const btnId = type === 'signup' ? 'signup-button' : 'signin-button';
  const btnName = type === 'signup' ? '회원가입' : '로그인';

  const [auth, setAuth] = useState({
    email: '',
    pw: '',
  });

  const emailRegex = /@+/;
  const pwRegex = /.{8,}/;

  const isValidEmail = useMemo(() => emailRegex.test(auth.email), [auth.email]);
  const isValidPw = useMemo(() => pwRegex.test(auth.pw), [auth.pw]);
  const isValid = isValidEmail && isValidPw;

  const emailOnChange = (e) => {
    const emailInput = {
      ...auth,
      [e.target.name]: e.target.value,
    };
    setAuth(emailInput);
  };

  const pwOnChange = (e) => {
    const pwInput = {
      ...auth,
      [e.target.name]: e.target.value,
    };
    setAuth(pwInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <FormContainer>
      <Title>ToDoList</Title>
      <UserInputForm onSubmit={handleSubmit}>
        <EmailInput
          type="text"
          name="email"
          value={auth.email}
          onChange={emailOnChange}
          placeholder="이메일을 입력해주세요."
        />
        {!isValidEmail && type === 'signup' ? (
          <EmailValidText>이메일에 @ 포함되어야 합니다.</EmailValidText>
        ) : (
          ''
        )}

        <PwInput
          type="password"
          name="pw"
          value={auth.pw}
          onChange={pwOnChange}
          placeholder="비밀번호를 입력해주세요."
        />
        {!isValidPw && type === 'signup' ? (
          <PwValidText>비밀번호는 8자 이상이여야 합니다.</PwValidText>
        ) : (
          ''
        )}
      </UserInputForm>
      <Btn data-testid={btnId} type="submit" disabled={!isValid} onClick={onClick}>
        {btnName}
      </Btn>
    </FormContainer>
  );
}

export default AuthForm;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 144px;
  height: 46px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 46px;
  color: #6610f2;
`;

const UserInputForm = styled.form`
  width: 308px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const EmailInput = styled.input`
  padding: 0 5px;
  width: 288px;
  height: 48px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: placeholder;
  box-sizing: border-box;
`;

const PwInput = styled.input`
  padding: 0 5px;
  width: 288px;
  height: 48px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: placeholder;
  box-sizing: border-box;
`;

const EmailValidText = styled.p`
  width: 170px;
  height: 17px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 350;
  font-size: 12px;
  line-height: 17px;
  color: #fb0000;
`;

const PwValidText = styled.p`
  width: 180px;
  height: 17px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 350;
  font-size: 12px;
  line-height: 17px;
  color: #fb0000;
`;

const Btn = styled.button`
  width: 288px;
  height: 47px;
  border: none;
  color: #ffffff;
  background-color: ${(props) => (props.disabled ? 'gray' : '#6610F2')};
  border-radius: 4px;
`;
