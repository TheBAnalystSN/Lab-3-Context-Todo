import { useState } from "react";
import { useTodos } from "../contexts/TodoContext";

const TodoItem = ({ todo }) => {
  const { toggleTodo, deleteTodo, editTodo } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const saveEdit = () => {
    editTodo(todo.id, text);
    setIsEditing(false);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />

      {isEditing ? (
        <>
          <input value={text} onChange={e => setText(e.target.value)} />
          <button onClick={saveEdit}>Save</button>
        </>
      ) : (
        <span
          style={{
            textDecoration: todo.completed ? "line-through" : "none"
          }}
          onDoubleClick={() => setIsEditing(true)}
        >
          {todo.text}
        </span>
      )}

      <button onClick={() => deleteTodo(todo.id)}>X</button>
    </li>
  );
};

export default TodoItem;
