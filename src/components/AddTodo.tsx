import React, { useState, useContext, FormEvent, memo } from "react";
import { TodoContext } from "../context/todoContext";
import { todoContextType, ITodo } from "../types/todo";

const AddTodo: React.FC = memo(() => {
  const { saveTodo } = useContext(TodoContext) as todoContextType;
  const [formData, setFormData] = useState<ITodo | {}>();

  const handleForm = (e: FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const handleSaveTodo = (e: FormEvent, formData: ITodo | any) => {
    e.preventDefault();
    saveTodo(formData);
  };

  return (
    <form className="form" onSubmit={(e) => handleSaveTodo(e, formData)}>
      <div>
        <div>
          <label htmlFor="name">Title</label>
          <input onChange={handleForm} type="text" id="title" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input onChange={handleForm} type="text" id="description" />
        </div>
      </div>
      <button disabled={formData === undefined ? true : false}>Add Todo</button>
    </form>
  );
});

export default memo(AddTodo);
