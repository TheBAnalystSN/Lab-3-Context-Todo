# Lab 3 – Context API Todo Application

## Overview

This project is a React Todo application built using the Context API for global state management. The goal of this lab was to avoid prop drilling and instead manage shared state such as todos, visibility filters, and theme settings using multiple React contexts.

The application allows users to add, edit, delete, and complete todo items, filter todos by status, toggle between light and dark themes, and persist data using localStorage.

---

## Features

### Todo Management

- Add new todos
- Edit existing todos
- Mark todos as completed or active
- Delete individual todos
- Clear all completed todos

### Filtering

- View all todos
- View only active todos
- View only completed todos

### Theme Switching

- Toggle between light and dark themes
- Theme selection persists between page refreshes

### Persistence

- Todos are saved to localStorage
- Theme preference is saved to localStorage
- Data is restored on page reload

---

## Technologies Used

- React (JavaScript)
- React Context API
- Vite
- LocalStorage
- CSS

---

## Project Structure

vite-project/
├── src/
│ ├── components/
│ │ ├── TodoInput.jsx
│ │ ├── TodoList.jsx
│ │ ├── TodoItem.jsx
│ │ ├── FilterButtons.jsx
│ │ └── ThemeToggleButton.jsx
│ ├── contexts/
│ │ ├── TodoContext.jsx
│ │ ├── FilterContext.jsx
│ │ └── ThemeContext.jsx
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── README.md
├── REFLECTION.md
└── package.json
---

## How to Run the Project

1. Open the project folder in VS Code
2. Open the terminal and navigate into the project directory:

   ```bash
   cd vite-project

   Install dependencies:
   npm install

Start the development server:
npm run dev

Open the browser and go to:
http://localhost:5173

Notes

This project uses JavaScript instead of TypeScript

Resources Used

React Documentation (Context API)

Vite Documentation

MDN Web Docs (localStorage)

Class notes and lecture examples

