import React from "react";
import { TodoProvider } from "./contexts/todo/TodoContext";
import TodoContainer from "./containers/todo/TodoContainer";
import "./App.scss";

const App: React.FC = () => {
  return (
    <TodoProvider>
      <TodoContainer />
    </TodoProvider>
  );
};

export default App;
