import { useState } from "react";

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const [editMode, setEditMode] = useState(false);

  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  const handleUpdate = () => {
    updateTodo(todo._id, {
      title,
      description,
      completed: todo.completed,
    });

    setEditMode(false);
  };

  const handleStatusChange = () => {
    updateTodo(todo._id, {
      title: todo.title,
      description: todo.description,
      completed: !todo.completed,
    });
  };

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      {editMode ? (
        <>
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          <input
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />

          <button onClick={handleUpdate}>Save</button>

          <button onClick={() => setEditMode(false)}>
            Cancel
          </button>
        </>
      ) : (
        <>
          <h3>{todo.title}</h3>

          <p>{todo.description}</p>

          <p>
            Status: {todo.completed ? "Completed" : "Pending"}
          </p>

          <button onClick={handleStatusChange}>
            {todo.completed ? "Mark Pending" : "Mark Complete"}
          </button>

          <button onClick={() => setEditMode(true)}>
            Edit
          </button>

          <button onClick={() => deleteTodo(todo._id)}>
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default TodoItem;