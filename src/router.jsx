import React from 'react';
import { createBrowserRouter, redirect } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Todo from './pages/Todo';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

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
    element: (
      <div>
        <SignIn />
      </div>
    ),
    loader: publicMiddleware,
  },
  {
    path: '/signup',
    element: (
      <div>
        <SignUp />
      </div>
    ),
    loader: publicMiddleware,
  },
];

const router = createBrowserRouter(route);

export default router;
