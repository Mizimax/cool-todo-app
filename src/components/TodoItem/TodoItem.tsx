import React, { useState } from "react";
import { useTodo } from "../../hooks/useTodo";
import "./TodoItem.scss";
import Dropdown from "../Dropdown/Dropdown";

interface TodoItemProps {
  id: number;
  title: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed }) => {
  const { editTodo, toggleTodo, removeTodo } = useTodo();
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleEdit = () => setIsEditing(true);

  const handleSave = () => {
    if (newTitle.trim()) {
      editTodo(id, newTitle, completed);
      setIsEditing(false);
    }
  };

  const handleToggle = () => {
    toggleTodo(id);
  };

  const handleDelete = () => {
    removeTodo(id);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <div className="todo-item__edit">
          <input
            className="edit-input"
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSave()}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div className="todo-content">
          <input
            className="checkbox"
            type="checkbox"
            checked={completed}
            onChange={handleToggle}
          />
          <div className={`title ${completed ? "completed" : ""}`}>{title}</div>
          <Dropdown handleDelete={handleDelete} handleEdit={handleEdit} />
        </div>
      )}
    </div>
  );
};

export default TodoItem;
