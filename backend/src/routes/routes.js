const express = require("express");

const {
  getTodos,
  createTodo,
  updateTodo,
  updateTodoStatus,
  searchTodo,
  deleteTodo,
} = require("../controllers/todo");

const router = express.Router();

// Get all todos
router.get("/", getTodos);

// Create todo
router.post("/", createTodo);

// Update todo
router.put("/:id", updateTodo);

// Update status
router.patch("/:id/status", updateTodoStatus);

// search 
router.get("/search", searchTodo);

// Delete todo
router.delete("/:id", deleteTodo);

module.exports = router;