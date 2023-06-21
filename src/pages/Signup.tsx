import React from 'react';
import FormComp from '../components/FormComp';
import useInput from '../hooks/useInput';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../api';

const Signup = () => {
  const navigate = useNavigate();
  const { field, error, onChange } = useInput();

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const result = await signUp(field);

    console.log(result);
    navigate('/signin');
  };

  return (
    <FormComp
      name="회원가입"
      btnId="signup-button"
      field={field}
      error={error}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default Signup;
