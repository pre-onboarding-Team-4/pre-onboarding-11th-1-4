import React from 'react';
import { createBrowserRouter, redirect } from 'react-router-dom';
import App from './App';

const jwt = localStorage.getItem('access_token');

const privateMiddleware = () => {
  if (jwt) {
    return true;
  }

  return redirect('/signin');
};

const publicMiddleware = () => {
  if (jwt) {
    return redirect('/todo');
  }

  return true;
};

const route = [
  {
    path: '/',
    element: <App />,
    errorElement: <div>404</div>,
    children: [
      {
        path: '/todo',
        element: <div>todo</div>,
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
      {
        path: '',
        loader: () => redirect('/signin'),
      },
    ],
  },
];

const router = createBrowserRouter(route);

export default router;
