import React, { useState } from 'react';

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
      <h2>ToDOList</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">
            이메일
            <input
              type="text"
              id="email"
              name="email"
              value={auth.email}
              onChange={emailOnChange}
              placeholder="이메일을 입력해주세요."
            />
            {!validEmail ? <p>이메일이 올바르지 않습니다.</p> : ''}
          </label>
        </div>

        <div>
          <label htmlFor="pw">
            비밀번호
            <input
              type="password"
              id="pw"
              name="pw"
              value={auth.pw}
              onChange={pwOnChange}
              placeholder="비밀번호를 입력해주세요."
            />
            {!validPw ? <p>비밀번호가 올바르지 않습니다.</p> : ''}
          </label>
        </div>
      </form>

      <button data-testid={btnId} type="submit" disabled={validCheck} onClick={btnOnClick}>
        {btnName}
      </button>
    </div>
  );
}

export default AuthForm;
