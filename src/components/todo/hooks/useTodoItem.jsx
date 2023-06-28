import { useState } from 'react';
import { updateTodoApi, deleteTodoApi } from '../../../api/todos';

export default function useTodoItem({
  item: { id, todo, isCompleted },
  setTodos,
}) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);

  const handleComplete = async () => {
    const body = {
      todo,
      isCompleted: !isCompleted,
    };

    const res = await updateTodoApi(id, body);
    setTodos(prev =>
      prev.map(todo => (todo.id === res.data.id ? res.data : todo))
    );
  };

  const handleEdit = state => {
    if (!state) {
      setEditedTodo(todo);
    }
    setIsEditMode(state);
  };

  const handleTodoChange = e => {
    setEditedTodo(e.target.value);
  };

  const handleTodoUpdate = async () => {
    const body = {
      todo: editedTodo,
      isCompleted,
    };

    try {
      const res = await updateTodoApi(id, body);
      setTodos(prev =>
        prev.map(todo => (todo.id === res.data.id ? res.data : todo))
      );
      setIsEditMode(false);
    } catch (error) {
      console.error(error);
      alert('수정 실패');
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTodoApi(id);
      setTodos(prev => prev.filter(todo => todo.id !== id));
    } catch (error) {
      console.error(error);
      alert('에러 발생');
    }
  };

  return {
    id,
    isCompleted,
    handleComplete,
    isEditMode,
    todo,
    editedTodo,
    handleTodoChange,
    handleEdit,
    handleDelete,
    handleTodoUpdate,
  };
}
