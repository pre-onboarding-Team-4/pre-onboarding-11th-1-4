import { useState } from 'react';
import { createTodoApi } from '../../../api/todos';

export default function useTodoForm(setTodos) {
  const [newTodo, setNewTodo] = useState('');

  const handleChange = e => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const body = {
      todo: newTodo,
    };

    try {
      const res = await createTodoApi(body);
      setTodos(prev => [...prev, res.data]);
    } catch (error) {
      console.error(error);
      alert('할 일을 입력해 주세요.');
    } finally {
      setNewTodo('');
    }
  };

  return { newTodo, handleChange, handleSubmit };
}
