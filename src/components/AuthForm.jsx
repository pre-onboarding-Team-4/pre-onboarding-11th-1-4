import React, { useState } from 'react';
import { styled } from 'styled-components';

function AuthForm({ type, signUpOnClick, signInOnClick }) {
  const btnId = type === 'signup' ? 'signup-button' : 'signin-button';
  const btnName = type === 'signup' ? '회원가입' : '로그인';
  const btnOnClick = type === 'signup' ? signUpOnClick : signInOnClick;

  const [validEmail, setValidEmail] = useState(false);
  const [validPw, setValidPw] = useState(false);

  const [auth, setAuth] = useState({
    email: '',
    pw: '',
  });

  const validCheck = !(validEmail && validPw);

  const emailOnChange = (e) => {
    const emailCheck = /@+/;
    const emailInput = {
      ...auth,
      [e.target.name]: e.target.value,
    };
    setAuth(emailInput);
    if (emailCheck.test(emailInput.email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  const pwOnChange = (e) => {
    const pwCheck = /.{8,}/;
    const pwInput = {
      ...auth,
      [e.target.name]: e.target.value,
    };
    setAuth(pwInput);
    if (pwCheck.test(pwInput.pw)) {
      setValidPw(true);
    } else {
      setValidPw(false);
    }
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
        {!validEmail ? <EmailValidText>이메일이 올바르지 않습니다.</EmailValidText> : ''}

        <PwInput
          type="password"
          name="pw"
          value={auth.pw}
          onChange={pwOnChange}
          placeholder="비밀번호를 입력해주세요."
        />
        {!validPw ? <PwValidText>비밀번호가 올바르지 않습니다.</PwValidText> : ''}
      </UserInputForm>

      <Btn data-testid={btnId} type="submit" disabled={validCheck} onClick={btnOnClick}>
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
  width: 142px;
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
  width: 153px;
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
