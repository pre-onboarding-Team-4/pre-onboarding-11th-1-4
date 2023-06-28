import { UpdateProps } from '../api';
import TodoItem from './TodoItem';

const TodoList = ({
  todos,
  onDelete,
  onToggle,
  onUpdate,
}: {
  todos: any;
  onDelete: (id: number) => void;
  onToggle: (data: UpdateProps) => void;
  onUpdate: (data: UpdateProps) => void;
}) => {
  return (
    <ul>
      {todos.length > 0 &&
        todos.map((todo: any) => (
          <TodoItem
            {...todo}
            onDelete={onDelete}
            onToggle={onToggle}
            onUpdate={onUpdate}
            key={todo.id}
          />
        ))}
    </ul>
  );
};

export default TodoList;
