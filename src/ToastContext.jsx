import React, { createContext, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import Toast from './components/Toast';
import ToastList from './components/ToastList';

export const ToastContext = createContext(null);

/* eslint-disable react/prop-types */
export default function ToastsContextProvier({ children }) {
  const [toasts, setToasts] = useState([]);
  const data = useMemo(() => [toasts, setToasts], [toasts]);

  return (
    <ToastContext.Provider value={data}>
      {children}
      {createPortal(
        <ToastList>
          {toasts.map(({ message, type }) => (
            <Toast type={type}>{message}</Toast>
          ))}
        </ToastList>,
        document.getElementById('toast')
      )}
    </ToastContext.Provider>
  );
}
