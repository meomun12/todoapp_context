import React from "react";
import TodoProvider from "./context/todoContext";
import ThemeProvider from "./context/themeContext";
import Todos from "./containers/Todos";
import AddTodo from "./components/AddTodo";
import "./style.scss";
import ThemeWrapper from "./components/ThemeWrapper";
export default function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <ThemeWrapper>
          <main className="App">
            <div className="header">
              <h1>My Todos</h1>
            </div>
            <AddTodo />
            <Todos />
          </main>
        </ThemeWrapper>
      </TodoProvider>
    </ThemeProvider>
  );
}
