import React from 'react';
import AuthForm from '../components/AuthForm';

function SignIn() {
  return (
    <div>
      <AuthForm />

      <button data-testid="signin-button" type="submit" disabled>
        로그인
      </button>
    </div>
  );
}

export default SignIn;
