import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim()) {
      alert("Please enter a task");
      return;
    }

    addTodo({
      title,
      description,
    });

    setTitle("");
    setDescription("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <input
        type="text"
        placeholder="Enter description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;