import React, { useState } from "react";
import { useTodo } from "../../hooks/useTodo";
import "./AddTodo.scss";

const AddTodo: React.FC = () => {
  const [title, setTitle] = useState("");
  const { addTodo } = useTodo();

  const handleAddTodo = () => {
    if (title.trim()) {
      addTodo(title);
      setTitle("");
    }
  };

  return (
    <div className="add-todo">
      <input
        className="add-todo__input"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onBlur={handleAddTodo}
        onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
        placeholder="Add your todo..."
      />
    </div>
  );
};

export default AddTodo;
