import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function SignUp() {
  const navigate = useNavigate();

  const signUpOnClick = () => {
    // 회원가입 api
    navigate('/signin');
  };

  return (
    <div>
      <AuthForm type="signup" signUpOnClick={signUpOnClick} />
    </div>
  );
}

export default SignUp;
