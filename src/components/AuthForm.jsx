import React, { useMemo, useState } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

function AuthForm({ type, onClick }) {
  const navigate = useNavigate();

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

  const renderEmailError = () => {
    if (type !== 'signup') return false;
    if (auth.email === '') return false;
    if (isValidEmail) return false;
    return true;
  };

  const renderPwError = () => {
    if (type !== 'signup') return false;
    if (auth.pw === '') return false;
    if (isValidPw) return false;
    return true;
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
        {renderEmailError() ? <EmailValidText>이메일에 @ 포함되어야 합니다.</EmailValidText> : ''}

        <PwInput
          type="password"
          name="pw"
          value={auth.pw}
          onChange={pwOnChange}
          placeholder="비밀번호를 입력해주세요."
        />
        {renderPwError() ? <PwValidText>비밀번호는 8자 이상이여야 합니다.</PwValidText> : ''}
      </UserInputForm>
      <Btn data-testid={btnId} type="submit" disabled={!isValid} onClick={onClick}>
        {btnName}
      </Btn>
      {type === 'signup' ? (
        <SignInMove
          onClick={() => {
            navigate('/signin');
          }}
        >
          가입한 계정이 있으신가요?
        </SignInMove>
      ) : (
        <SignUpMove
          onClick={() => {
            navigate('/signup');
          }}
        >
          가입한 계정이 없으신가요?
        </SignUpMove>
      )}
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
  width: 100%;
  max-width: 288px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmailInput = styled.input`
  padding: 0 12px;
  width: 288px;
  height: 48px;
  margin-bottom: 8px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: placeholder;
  box-sizing: border-box;
  outline: none;
  border: 1px solid #6c757d;
  border-radius: 4px;
  &:focus {
    border-color: var(--color-primary);
  }
`;

const PwInput = styled.input`
  padding: 0 12px;
  width: 288px;
  height: 48px;
  margin-bottom: 8px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: placeholder;
  box-sizing: border-box;
  outline: none;
  border: 1px solid #6c757d;
  border-radius: 4px;
  &:focus {
    border-color: var(--color-primary);
  }
`;

const EmailValidText = styled.p`
  width: 100%;
  padding-left: 12px;
  margin: 0 0 8px;
  text-align: left;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 350;
  font-size: 12px;
  color: #fb0000;
`;

const PwValidText = styled.p`
  width: 100%;
  padding-left: 12px;
  margin: 0 0 8px;
  text-align: left;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 350;
  font-size: 12px;
  color: #fb0000;
`;

const Btn = styled.button`
  width: 288px;
  height: 47px;
  border: none;
  color: #ffffff;
  background-color: ${(props) => (props.disabled ? 'gray' : '#6610F2')};
  border-radius: 4px;
  transition: background-color 200ms ease-in-out;
  cursor: pointer;

  &:not(:disabled):hover {
    background-color: #4a179c;
  }

  &:disabled:hover {
    cursor: not-allowed;
  }
`;

const SignInMove = styled.p`
  margin-top: 16px;
  font-size: 16px;
  text-decoration: underline;
  color: var(--color-placeholder);
`;

const SignUpMove = styled.p`
  margin-top: 16px;
  font-size: 16px;
  text-decoration: underline;
  color: var(--color-placeholder);
`;
