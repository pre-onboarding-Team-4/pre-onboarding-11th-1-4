import axios from 'axios';

const BASE_URL = 'https://www.pre-onboarding-selection-task.shop/auth';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const signIn = async ({ email, password }) => {
  const response = await instance.post('/signin', {
    email,
    password,
  });

  return {
    access_token: response.data.access_token,
    message: '로그인에 성공했습니다.',
  };
};

export const signUp = async ({ email, password }) => {
  await instance.post('/signup', {
    email,
    password,
  });

  return {
    message: '회원가입에 성공했습니다.',
  };
};

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { data } = error.response;
    if (!data.message) {
      return Promise.reject(new Error('알 수 없는 에러가 발생했습니다.'));
    }
    return Promise.reject(new Error(data.message));
  }
);
