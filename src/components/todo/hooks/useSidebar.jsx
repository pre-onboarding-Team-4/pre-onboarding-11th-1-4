import { useNavigate } from 'react-router-dom';

export default function useSidebar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return { handleLogout };
}
