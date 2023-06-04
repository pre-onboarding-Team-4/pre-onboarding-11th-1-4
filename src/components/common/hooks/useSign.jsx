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
        signUpApi({ email, password });
      } catch (error) {
        alert('에러가 발생했습니다.');
        console.error(error);
      }
    } else {
      try {
        const res = await signInApi({ email, password });
        localStorage.setItem('token', res.data.access_token);
      } catch (error) {
        alert('에러가 발생했습니다.');
        console.error(error);
      }
    }

    navigate(`/${path}`);
  };

  return handleSubmit;
}
