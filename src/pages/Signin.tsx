import { useNavigate } from 'react-router-dom';
import FormComp from '../components/FormComp';
import useInput from '../hooks/useInput';
import { signin } from '../api';

const Signin = () => {
  const navigate = useNavigate();
  const { field, error, onChange } = useInput();

  const onSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const result = await signin(field);

      if (result?.status === 200) {
        localStorage.setItem('access_token', result.data.access_token);

        navigate('/todo');
      } else {
        alert('로그인이 실패하였습니다');
      }
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  return (
    <FormComp
      type="signin"
      field={field}
      error={error}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default Signin;
