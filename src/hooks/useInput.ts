import { useState } from 'react';

export default function useInput() {
  const [field, setField] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState({
    email: '',
    password: '',
    cond: false,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'email') {
      if (!value.includes('@')) {
        setError({ ...error, email: '이메일에는 @를 포함해주세요.' });
      } else {
        setError({ ...error, email: '' });
      }
    }

    if (name === 'password') {
      if (value.length < 8) {
        setError({ ...error, password: '비밀번호는 8자 이상 입력해주세요.' });
      } else {
        setError({ ...error, password: '' });
      }
    }

    setField({
      ...field,
      [name]: value,
    });
  };

  return { field, error, onChange };
}
