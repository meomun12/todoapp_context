import React, { useState, createContext, memo } from "react";
import { idText } from "typescript";
import { todoContextType, ITodo } from "../types/todo";
export const TodoContext = createContext<todoContextType | null>(null);

export interface ReactNode extends React.PropsWithChildren {}
const TodoProvider: React.FC<ReactNode> = memo(({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: 1,
      title: "post 1",
      description: "this is a description",
      status: false,
    },
    {
      id: 2,
      title: "post 2",
      description: "this is a description",
      status: false,
    },
  ]);
  const saveTodo = (todo: ITodo) => {
    const newTodo: ITodo = {
      id: Math.random(),
      title: todo.title,
      description: todo.description,
      status: false,
    };
    setTodos([...todos, newTodo]);
    console.log("rerun");
  };

  const updateTodo = (id: number) => {
    todos.filter((todo: ITodo) => {
      if (todo.id === id) {
        todo.status = true;
        setTodos([...todos]);
      }
    });
  };

  return (
    <TodoContext.Provider value={{ todos, saveTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
});

export default memo(TodoProvider);
