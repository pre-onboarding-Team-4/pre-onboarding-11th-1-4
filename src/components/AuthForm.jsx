import React, { useMemo, useState } from 'react';

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
            {auth.email === '' || isValidEmail ? '' : <p>이메일이 올바르지 않습니다.</p>}
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
            {auth.pw === '' || isValidPw ? '' : <p>비밀번호가 올바르지 않습니다.</p>}
          </label>
        </div>
      </form>
      <button data-testid={btnId} type="submit" disabled={!isValid} onClick={onClick}>
        {btnName}
      </button>
    </div>
  );
}

export default AuthForm;
