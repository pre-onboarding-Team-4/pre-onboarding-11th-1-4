import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.response.use(
  res => res,
  error => {
    if (error.response.status === 401) {
      window.location.href = '/';
    }
  },
);

export const signUp = (field: { email: string; password: string }) =>
  api({
    method: 'post',
    url: 'auth/signup',
    data: field,
  });

export const signin = (field: { email: string; password: string }) =>
  api({
    method: 'post',
    url: 'auth/signin',
    data: field,
  });

export const todo = () =>
  api({
    method: 'get',
    url: '/todos',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
  });
