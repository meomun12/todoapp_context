import React, { useContext, memo } from "react";
import { todoContextType, ITodo } from "../types/todo";
import { TodoContext } from "../context/todoContext";
import Todo from "../components/Todo";

const Todos = memo(() => {
  const { todos, updateTodo } = useContext(TodoContext) as todoContextType;
  return (
    <>
      {todos.map((todo: ITodo) => (
        <Todo key={todo.id} updateTodo={updateTodo} todo={todo} />
      ))}
    </>
  );
});

export default memo(Todos);
