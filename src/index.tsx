import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import { GlobalStyle } from './styles/GlobalStyle';
import Todo from './pages/Todo';

const redirectToSignIn = () => redirect('/signin');

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

const router = createBrowserRouter([
  {
    path: '/todo',
    element: <Todo />,
    loader: privateMiddleware,
  },
  {
    path: '/signin',
    element: <Signin />,
    loader: publicMiddleware,
  },
  {
    path: '/signup',
    element: <Signup />,
    loader: publicMiddleware,
  },
  {
    path: '*',
    loader: redirectToSignIn,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
