import React from 'react';
import AuthForm from '../components/AuthForm';

function SignUp() {
  return (
    <div>
      <AuthForm />

      <button data-testid="signup-button" type="submit" disabled>
        회원가입
      </button>
    </div>
  );
}

export default SignUp;
