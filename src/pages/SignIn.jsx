import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import useToast from '../hooks/useToast';
import { signIn } from '../apis/auth';

function SignIn() {
  const navigate = useNavigate();
  const createToast = useToast();

  const signInOnClick = async ({ email, pw: password }) => {
    try {
      const { access_token: accessToken } = await signIn({ email, password });
      localStorage.setItem('access_token', accessToken);
      navigate('/todo');
    } catch (error) {
      createToast({ message: error.message, type: 'warn' });
    }
  };
  return (
    <div>
      <AuthForm type="signin" handleClick={signInOnClick} />
    </div>
  );
}

export default SignIn;
