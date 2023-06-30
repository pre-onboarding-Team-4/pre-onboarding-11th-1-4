import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import router from './router';
import ToastsContextProvier from './ToastContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastsContextProvier>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ToastsContextProvier>
  </React.StrictMode>
);
