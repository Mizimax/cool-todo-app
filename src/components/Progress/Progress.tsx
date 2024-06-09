import React from "react";
import { useTodo } from "../../hooks/useTodo";
import "./Progress.scss";

const Progress: React.FC = () => {
  const { todos } = useTodo();
  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;
  const progress = totalCount === 0 ? 0 : (completedCount / totalCount) * 100;

  return (
    <div className="progress">
      <h2 className="font28-medium">Progress</h2>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <span>{`${completedCount} completed`}</span>
    </div>
  );
};

export default Progress;
