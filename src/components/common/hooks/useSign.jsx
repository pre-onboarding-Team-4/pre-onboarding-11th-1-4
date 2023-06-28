import { useNavigate } from 'react-router-dom';
import { signInApi, signUpApi } from '../../../api/auth';

export default function useSign(type, data) {
  const navigate = useNavigate();
  const path = type === 'signup' ? 'signin' : 'todo';

  const handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = data;

    if (type === 'signup') {
      try {
        await signUpApi({ email, password });
        navigate(`/${path}`);
      } catch (error) {
        alert('이미 존재하는 아이디입니다.');
        console.error(error);
      }
    } else {
      try {
        const res = await signInApi({ email, password });
        localStorage.setItem('token', res.data.access_token);
        navigate(`/${path}`);
      } catch (error) {
        alert('아이디 또는 비밀번호가 일치하지 않습니다.');
        console.error(error);
      }
    }
  };

  return handleSubmit;
}
