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
    try {
      const result = await signUp(field);

      if (result.status === 201) {
        navigate('/signin');
      }
    } catch (error: any) {
      alert(error.response.data.message.join(''));
    }
  };

  return (
    <FormComp
      type="signup"
      field={field}
      error={error}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default Signup;
