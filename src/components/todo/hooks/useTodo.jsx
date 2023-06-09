import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTodosApi } from '../../../api/todos';

export default function useTodo() {
  const [isOpen, setIsOpen] = useState(false);
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  const handleOpen = () => {
    console.log('왜..?', isOpen);
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    !localStorage.getItem('token') && navigate('/signin');
  }, [navigate]);

  useEffect(() => {
    const dataFetch = async () => {
      const res = await getTodosApi();

      if (res.status !== 200) {
        return;
      }

      setTodos(res.data);
    };

    dataFetch();
  }, []);

  return { handleOpen, todos, setTodos, isOpen };
}
