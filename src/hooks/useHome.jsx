import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useHome() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('token');
  });

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
  };

  return { navigate, isLoggedIn, handleLogout };
}
