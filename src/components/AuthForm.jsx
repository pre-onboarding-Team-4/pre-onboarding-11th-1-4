import React, { useState } from 'react';

function AuthForm() {
  const [auth, setAuth] = useState({
    email: '',
    pw: '',
  });

  const [validEmail, setValidEmail] = useState(true);
  const [validPw, setValidPw] = useState(true);

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
            {validEmail === false ? <p>이메일이 올바르지 않습니다.</p> : ''}
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
            {validPw === false ? <p>비밀번호가 올바르지 않습니다.</p> : ''}
          </label>
        </div>
      </form>
    </div>
  );
}

export default AuthForm;
