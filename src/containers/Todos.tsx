import React, { useContext } from "react";
import { todoContextType, ITodo } from "../types/todo";
import { TodoContext } from "../context/todoContext";
import Todo from "../components/Todo";

const Todos = () => {
  const { todos, updateTodo } = useContext(TodoContext) as todoContextType;
  return (
    <>
      {todos.map((todo: ITodo) => (
        <Todo key={todo.id} updateTodo={updateTodo} todo={todo} />
      ))}
    </>
  );
};

export default Todos;
