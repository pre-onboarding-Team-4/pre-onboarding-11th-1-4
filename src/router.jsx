import React from 'react';
import { createBrowserRouter, redirect } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Todo from './pages/Todo';

const privateMiddleware = () => {
  const jwt = localStorage.getItem('access_token');
  if (jwt) {
    return true;
  }
  return redirect('/signin');
};

const publicMiddleware = () => {
  const jwt = localStorage.getItem('access_token');
  if (jwt) {
    return redirect('/todo');
  }
  return true;
};

const route = [
  {
    path: '',
    loader: () => redirect('/signin'),
    errorElement: <NotFound />,
  },
  {
    path: '/todo',
    element: <Todo />,
    loader: privateMiddleware,
  },
  {
    path: '/signin',
    element: <div>signin</div>,
    loader: publicMiddleware,
  },
  {
    path: '/signup',
    element: <div>signup</div>,
    loader: publicMiddleware,
  },
];

const router = createBrowserRouter(route);

export default router;
