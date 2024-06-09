import React from "react";
import TodoList from "../../components/TodoList/TodoList";
import Progress from "../../components/Progress/Progress";
import { useTodo } from "../../hooks/useTodo";
import "./TodoContainer.scss";

const TodoContainer: React.FC = () => {
  const { todos } = useTodo();
  return (
    <div className="todo-container">
      <div className="todo-container__content">
        <Progress />
        <TodoList todos={todos} />
      </div>
    </div>
  );
};

export default TodoContainer;
