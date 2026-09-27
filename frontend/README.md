# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.





# Task 33 - To-Do List Application

This project is a simple To-Do List application made using **React.js** for the frontend and **Node.js, Express.js and MongoDB** for the backend.

The application allows users to:

* Add a new todo
* View all todos
* Update a todo
* Delete a todo
* Search todos
* Store todos in MongoDB

---

## Project Structure

```text
Task33/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── package.json
│   └── server.js
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── TodoForm.jsx
    │   │   ├── TodoList.jsx
    │   │   └── App.css
    │   │
    │   ├── App.jsx
    │   └── main.jsx
    │
    ├── package.json
    └── index.html
```

---

# Backend

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* CORS
* dotenv

## Backend Features

The backend provides APIs for:

### 1. Get all todos

```text
GET /todos
```

### 2. Add todo

```text
POST /todos
```

Example:

```json
{
  "title": "Complete React Task"
}
```

### 3. Update todo

```text
PUT /todos/:id
```

### 4. Delete todo

```text
DELETE /todos/:id
```

### 5. Search todo

```text
GET /todos/search?search=react
```

The search API searches the todo title.

---

# Backend Setup

Go inside the backend folder:

```bash
cd backend
```

Install the required packages:

```bash
npm install
```

Create a `.env` file:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your MongoDB connection string.

Start the backend:

```bash
node server.js
```

If you are using nodemon:

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:5000
```

---

# Frontend

## Technologies Used

* React.js
* JavaScript
* Axios
* CSS
* Vite

## Frontend Features

The frontend contains:

* Todo form
* Todo list
* Add todo
* Update todo
* Delete todo
* Search todo
* Loading message
* Error message

---

# Frontend Setup

Go inside the frontend folder:

```bash
cd frontend
```

Install packages:

```bash
npm install
```

Install Axios if it is not already installed:

```bash
npm install axios
```

Start the frontend:

```bash
npm run dev
```

Vite will show a URL such as:

```text
http://localhost:5173
```

Open this URL in the browser.

---

# API Connection

The frontend connects to the backend using Axios.

Example:

```js
const API_URL = "http://localhost:3000/todos";
```

### Get Todos

```js
axios.get(API_URL);
```

### Add Todo

```js
axios.post(API_URL, todoData);
```

### Update Todo

```js
axios.put(`${API_URL}/${id}`, todoData);
```

### Delete Todo

```js
axios.delete(`${API_URL}/${id}`);
```

### Search Todo

```js
axios.get(`${API_URL}/search?search=${search}`);
```

---

# Search Functionality

The search box is available above the todo list.

For example, if the todo list contains:

```text
Complete React Task
Learn Node.js
Complete MongoDB Task
Shopping
```

If I search:

```text
React
```

the application will show:

```text
Complete React Task
```

The search is handled by the backend using MongoDB.

---

# How to Run the Complete Project

Open **two terminals**.

### Terminal 1 - Backend

```bash
cd backend
npm install
node server.js
```

Backend:

```text
http://localhost:3000
```

### Terminal 2 - Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend:

```text
http://localhost:5173
```

Now open the frontend URL in your browser.

---

# Testing

I tested the following features:

* Add Todo
* Display Todo
* Update Todo
* Delete Todo
* Search Todo
* MongoDB data storage
* Backend API connection
* Frontend and backend connection

---

# What I Learned

In this task, I learned:

* How to create a React application
* How to create an Express server
* How to create REST APIs
* How to connect Node.js with MongoDB
* How to use Mongoose
* How to use Axios in React
* How to perform CRUD operations
* How to implement search functionality
* How frontend communicates with backend
* How to use `.env` for environment variables

---

# Conclusion

This is a full-stack To-Do List application.

The **React frontend** is used to create the user interface, and the **Node.js backend** handles the APIs and database operations.

MongoDB is used to store the todo data.
