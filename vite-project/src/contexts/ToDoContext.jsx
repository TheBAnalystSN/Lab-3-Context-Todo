import { createContext, useContext, useReducer, useEffect } from "react";

const TodoContext = createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "TOGGLE":
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "DELETE":
      return state.filter(todo => todo.id !== action.payload);
    case "EDIT":
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    case "CLEAR_COMPLETED":
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
};

const getInitialTodos = () => {
  const stored = localStorage.getItem("todos");
  return stored ? JSON.parse(stored) : [];
};

export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, [], getInitialTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = text => {
    dispatch({
      type: "ADD",
      payload: {
        id: Date.now(),
        text,
        completed: false
      }
    });
  };

  const value = {
    todos,
    addTodo,
    toggleTodo: id => dispatch({ type: "TOGGLE", payload: id }),
    deleteTodo: id => dispatch({ type: "DELETE", payload: id }),
    editTodo: (id, text) =>
      dispatch({ type: "EDIT", payload: { id, text } }),
    clearCompleted: () => dispatch({ type: "CLEAR_COMPLETED" })
  };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => useContext(TodoContext);
