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
      if (res.status !== 201) {
        alert('할 일 추가에 실패했습니다.');
        return;
      }

      setTodos(prev => [...prev, res.data]);
    } catch (error) {
      console.error(error);
      alert('에러가 발생했습니다.');
    } finally {
      setNewTodo('');
    }
  };

  return { newTodo, handleChange, handleSubmit };
}
