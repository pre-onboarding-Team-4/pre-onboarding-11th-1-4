import { useNavigate } from 'react-router-dom';
import FormComp from '../components/FormComp';
import useInput from '../hooks/useInput';
import { signin } from '../api';

const Signin = () => {
  const navigate = useNavigate();
  const { field, error, onChange } = useInput();

  // const isValidate = useMemo(() => {
  //   password
  // }, [])

  const onSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const result = await signin(field);

      if (result.status === 200) {
        localStorage.setItem('access_token', result.data.access_token);
      }
    } catch (error) {
      console.log(error);
    }

    navigate('/signup');
  };

  return (
    <FormComp
      name="로그인"
      btnId="signin-button"
      field={field}
      error={error}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default Signin;
