import axios from 'axios';

const BASE_URL = 'https://www.pre-onboarding-selection-task.shop/';

const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export type UpdateProps = {
  id: number;
  todo: string;
  isCompleted: boolean;
};

export const signUp = (field: { email: string; password: string }) =>
  api.post('/auth/signup', field);

export const signin = (field: { email: string; password: string }) =>
  api.post('/auth/signin', field);

export const getTodos = () =>
  api.get('/todos', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
  });

export const createTodo = (todo: string) =>
  api.post(
    '/todos',
    { todo },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    },
  );

export const deleteTodo = (id: number) =>
  api.delete(`/todos/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
  });

export const updateTodo = ({ id, todo, isCompleted }: UpdateProps) =>
  api.put(
    `/todos/${id}`,
    {
      todo,
      isCompleted,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    },
  );
