import TodoItem from './TodoItem';

const TodoList = ({
  todos,
  onDelete,
}: {
  todos: any;
  onDelete: (id: number) => void;
}) => {
  return (
    <div>
      {todos.length > 0 &&
        todos.map((todo: any) => (
          <TodoItem {...todo} onDelete={onDelete} key={todo.id} />
        ))}
    </div>
  );
};

export default TodoList;
