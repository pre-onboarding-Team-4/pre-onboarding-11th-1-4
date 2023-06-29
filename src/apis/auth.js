import axios from 'axios';

const BASE_URL = 'https://www.pre-onboarding-selection-task.shop/auth';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return error;
  }
);

export const signIn = ({ email, password }) =>
  instance.post('/signin', {
    email,
    password,
  });

export const signUp = ({ email, password }) =>
  instance.post('/signup', {
    email,
    password,
  });
