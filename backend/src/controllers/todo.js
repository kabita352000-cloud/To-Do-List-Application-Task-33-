const Todo = require("../models/todo");

// Get all todos
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });

    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get todos",
    });
  }
};

// Create todo
const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || title.trim() === "") {
      return res.status(400).json({
        message: "Title is required",
      });
    }

    const todo = await Todo.create({
      title,
      description,
    });

    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create todo",
    });
  }
};

// Update todo
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    const todo = await Todo.findByIdAndUpdate(
      id,
      {
        title,
        description,
        completed,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!todo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update todo",
    });
  }
};

// Update only status
const updateTodoStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;

    const todo = await Todo.findByIdAndUpdate(
      id,
      {
        completed,
      },
      {
        new: true,
      }
    );

    if (!todo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update todo status",
    });
  }
};



// Search 
const searchTodo = async (req, res) => {
  try {
    const { search } = req.query;
    const todos = await Todo.find({ title: { $regex: search, $options: "i" }, });
    if (todos.length === 0) {
      return res.status(404).json({ message: "No todo found", });
    }
    res.status(200).json({ message: "Todo found successfully", todos, });
  }
  catch (error) { res.status(500).json({ message: "Failed to search todo", }); }
};

// Delete todo
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findByIdAndDelete(id);

    if (!todo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    res.status(200).json({
      message: "Todo deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete todo",
    });
  }
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  updateTodoStatus,
  searchTodo,
  deleteTodo,
};