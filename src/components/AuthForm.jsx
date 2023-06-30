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
    <div>
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
    </div>
  );
}

export default AuthForm;

const Title = styled.h2`
  position: absolute;
  width: 144px;
  height: 46px;
  left: calc(50% - 144px / 2 - 1px);
  top: 107px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 46px;
  color: #6610f2;
`;

const UserInputForm = styled.form`
  position: absolute;
  width: 308px;
  height: 215px;
  left: 6px;
  top: 153px;
`;

const EmailInput = styled.input`
  position: absolute;
  width: 288px;
  height: 48px;
  left: 10%;
  top: 31.37%;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: placeholder;
`;

const PwInput = styled.input`
  position: absolute;
  width: 288px;
  height: 48px;
  left: 10%;
  top: 80%;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: placeholder;
`;

const EmailValidText = styled.p`
  position: absolute;
  width: 170px;
  height: 17px;
  left: 12%;
  top: 52%;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 350;
  font-size: 12px;
  line-height: 17px;
  color: #fb0000;
`;

const PwValidText = styled.p`
  position: absolute;
  width: 180px;
  height: 17px;
  left: 12%;
  top: 101%;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 350;
  font-size: 12px;
  line-height: 17px;
  color: #fb0000;
`;

const Btn = styled.button`
  position: absolute;
  width: 288px;
  height: 47px;
  left: 10%;
  top: 65%;
  border: none;
  color: #ffffff;
  background-color: ${(props) => (props.disabled ? 'gray' : '#6610F2')};
  border-radius: 4px;
`;
