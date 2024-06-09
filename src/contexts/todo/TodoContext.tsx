import React, { createContext, useEffect, useState } from "react";
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../../services/api/todo";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoContextProps {
  todos: Todo[];
  fetchTodos: () => void;
  addTodo: (title: string) => void;
  editTodo: (id: number, title: string, completed: boolean) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

export const TodoContext = createContext<TodoContextProps | undefined>(
  undefined
);

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    getTodos().then((response) => setTodos(response.data));
  };

  const addTodo = (title: string) => {
    createTodo({ title, completed: false }).then((response) => {
      setTodos([...todos, response.data]);
    });
  };

  const editTodo = (id: number, title: string, completed: boolean) => {
    updateTodo(id, { title, completed }).then((response) => {
      setTodos(todos.map((todo) => (todo.id === id ? response.data : todo)));
    });
  };

  const toggleTodo = (id: number) => {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      updateTodo(id, { title: todo.title, completed: !todo.completed }).then(
        (response) => {
          setTodos(
            todos.map((todo) => (todo.id === id ? response.data : todo))
          );
        }
      );
    }
  };

  const removeTodo = (id: number) => {
    deleteTodo(id).then(() => {
      setTodos(todos.filter((todo) => todo.id !== id));
    });
  };

  return (
    <TodoContext.Provider
      value={{ todos, fetchTodos, addTodo, editTodo, toggleTodo, removeTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};
