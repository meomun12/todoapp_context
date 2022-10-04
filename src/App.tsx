import React from "react";
import TodoProvider from "./context/todoContext";
import ThemeProvider from "./context/themeContext";
import Todos from "./containers/Todos";
import AddTodo from "./components/AddTodo";
import "./App.css";

export default function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <main className="App">
          <h1>My Todos</h1>
          <AddTodo />
          <Todos />
        </main>
      </TodoProvider>
    </ThemeProvider>
  );
}
