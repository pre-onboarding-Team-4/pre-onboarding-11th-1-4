import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const signUp = (field: { email: string; password: string }) =>
  api.post('/auth/signup', field);

export const signin = (field: { email: string; password: string }) =>
  api.post('/auth/signin', field);

export const todo = () =>
  api.get('/todos', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
  });
