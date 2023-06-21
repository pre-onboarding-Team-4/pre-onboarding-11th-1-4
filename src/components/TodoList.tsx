import React, { useEffect } from 'react';
import { getTodos } from '../api';
import TodoItem from './TodoItem';

const TodoList = () => {
  useEffect(() => {
    (async () => {
      const list = await getTodos();

      console.log(list);
    })();
  }, []);

  return (
    <div>
      <TodoItem />
    </div>
  );
};

export default TodoList;
