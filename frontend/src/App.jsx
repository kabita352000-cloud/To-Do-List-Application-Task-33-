import { useEffect, useState } from "react";
import axios from "axios";

import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

import "./Components/App.css";

const API_URL = "http://localhost:5000/api/todos";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Get todos
  const getTodos = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(API_URL);

      setTodos(response.data);
    } catch (error) {
      setError("Unable to load tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  // Add todo
  const addTodo = async (todoData) => {
    try {
      const response = await axios.post(API_URL, todoData);

      setTodos((previousTodos) => [response.data, ...previousTodos]);
    } catch (error) {
      alert("Unable to add task");
    }
  };

  // Update todo
  const updateTodo = async (id, todoData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, todoData);

      setTodos((previousTodos) =>
        previousTodos.map((todo) => (todo._id === id ? response.data : todo)),
      );
    } catch (error) {
      alert("Unable to update task");
    }
  };

  // Search todo
  const searchTodo = async (search) => {
    try {
      const response = await axios.get(`${API_URL}/search?search=${search}`);

      setTodos(response.data.todos);
    } catch (error) {
      alert("Unable to search todo");
    }
  };

  // Delete todo
  const deleteTodo = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?",
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await axios.delete(`${API_URL}/${id}`);

      setTodos((previousTodos) =>
        previousTodos.filter((todo) => todo._id !== id),
      );
    } catch (error) {
      alert("Unable to delete task");
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1>My To-Do List</h1>

        <TodoForm addTodo={addTodo} />
        <input
          type="text"
          placeholder="Search todo"
          onChange={(e) => searchTodo(e.target.value)}
        />

        {loading && <p className="message">Loading tasks...</p>}

        {error && <p className="error">{error}</p>}

        {!loading && !error && (
          <TodoList
            todos={todos}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        )}
      </div>
    </div>
  );
};

export default App;
