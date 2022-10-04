export interface ITodo {
  id: number;
  title: string;
  description: string;
  status: boolean;
}
export type todoContextType = {
  todos: ITodo[];
  saveTodo: (todo: ITodo) => void;
  updateTodo: (todo: number) => void;
};
