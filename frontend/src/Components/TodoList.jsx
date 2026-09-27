import TodoItem from "./TodoItem";

const TodoList = ({ todos, updateTodo, deleteTodo }) => {
  if (todos.length === 0) {
    return <p className="no-todos">No tasks found.</p>;
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;