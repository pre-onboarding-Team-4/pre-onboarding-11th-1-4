import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { signUp } from '../apis/auth';
import useToast from '../hooks/useToast';

function SignUp() {
  const navigate = useNavigate();
  const createToast = useToast();

  const signUpOnClick = async ({ email, pw: password }) => {
    try {
      const { message } = await signUp({ email, password });
      createToast({ message, type: 'success' });
      navigate('/signin');
    } catch (error) {
      createToast({ message: error.message, type: 'warn' });
    }
  };

  return (
    <div>
      <AuthForm type="signup" handleClick={signUpOnClick} />
    </div>
  );
}

export default SignUp;
