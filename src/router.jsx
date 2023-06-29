import React from 'react';
import { Outlet, createBrowserRouter, redirect } from 'react-router-dom';
import App from './App';
import NotFound from './pages/NotFound';

const jwt = localStorage.getItem('access_token') || true;

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
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/todo',
        element: (
          <div>
            <h1>Header</h1>
            <Outlet />
          </div>
        ),
        loader: privateMiddleware,
        children: [
          {
            index: true,
            element: <div>todo</div>,
          },
        ],
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
