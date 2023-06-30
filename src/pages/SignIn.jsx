import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function SignIn() {
  const navigate = useNavigate();

  const signInOnClick = () => {
    // axios 로그인, jwt 받아와 저장
    // 투두로 이동, 임시로 signin
    navigate('/signin');
  };
  return (
    <div>
      <AuthForm type="signin" signInOnClick={signInOnClick} />
    </div>
  );
}

export default SignIn;
