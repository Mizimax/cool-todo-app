import React, { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import AddTodo from "../AddTodo/AddTodo";
import { Filter, Todo } from "../../constants/todo/todo.constant";
import "./TodoList.scss";

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos = [] }) => {
  const [filter, setFilter] = useState<Filter>(Filter.All);

  let filteredTodos = todos;
  if (filter !== Filter.All) {
    filteredTodos = todos.filter((todo) =>
      filter === Filter.Done ? todo.completed : !todo.completed
    );
  }
  return (
    <div className="todo-list">
      <div className="todo-list__header">
        <div className="title font24-medium">Tasks</div>
        <div className="filter">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as Filter)}
          >
            <option value={Filter.All}>All</option>
            <option value={Filter.Done}>Done</option>
            <option value={Filter.Undone}>Undone</option>
          </select>
        </div>
      </div>
      <div className="todo-list__content">
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <AddTodo />
    </div>
  );
};

export default TodoList;
